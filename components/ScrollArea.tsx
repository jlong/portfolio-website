'use client'

import React, {
  useEffect,
  useCallback,
  useRef,
  useState,
  ReactNode
} from 'react'
import clsx from 'clsx'

// Mapping of allowed gap values to Tailwind CSS gap classes
const gapClasses: { [key: number]: string } = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10'
}

export const ScrollArea = ({
  className,
  direction = 'left',
  speed = 5,
  gap = 4, // Default gap to Tailwind's "gap-4" (1rem)
  children
}: {
  className?: string
  direction: 'left' | 'right'
  speed?: number
  gap?: number // Unitless gap (e.g., 1, 2, 4, 8 for Tailwind's spacing scale)
  children: ReactNode | ReactNode[]
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const originalContentWidth = useRef<number>(0)
  const [duplicateCount, setDuplicateCount] = useState(2) // Dynamically adjust duplicates
  const animationFrameId = useRef<number | null>(null)
  const lastTimestamp = useRef<number | null>(null)
  const accumulatedOffset = useRef<number>(0) // Track the accumulated offset
  const [isPaused, setIsPaused] = useState(false)

  const scroll = useCallback(
    (timestamp: number) => {
      if (!lastTimestamp.current) {
        lastTimestamp.current = timestamp
      }

      if (!isPaused && containerRef.current) {
        const elapsed = timestamp - lastTimestamp.current
        const distance = (speed * elapsed) / 1000 // Convert speed to pixels per millisecond

        // Accumulate the distance
        accumulatedOffset.current += distance

        // Scroll by the integer part of the accumulated offset
        const scrollAmount = Math.floor(accumulatedOffset.current)
        if (scrollAmount !== 0) {
          const directionMultiplier = direction === 'left' ? 1 : -1
          containerRef.current.scrollBy({
            left: scrollAmount * directionMultiplier,
            behavior: 'auto'
          })

          // Subtract the integer part from the accumulated offset, keeping the remainder
          accumulatedOffset.current -= scrollAmount

          // Handle infinite loop by moving scrolled-off content to the end
          if (
            containerRef.current.scrollLeft >=
            originalContentWidth.current * duplicateCount
          ) {
            // Reset to the start of the original set when reaching the end of the cloned set
            containerRef.current.scrollLeft -=
              originalContentWidth.current * duplicateCount
          }

          lastTimestamp.current = timestamp
        }
      }

      animationFrameId.current = requestAnimationFrame(scroll)
    },
    [isPaused, direction, speed, duplicateCount]
  )

  useEffect(() => {
    if (!isPaused) {
      animationFrameId.current = requestAnimationFrame(scroll)
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      lastTimestamp.current = null // Reset timestamp when stopping
      accumulatedOffset.current = 0 // Reset accumulated offset
    }
  }, [isPaused, scroll])

  // Dynamically calculate the width of the original set of cards
  useEffect(() => {
    if (containerRef.current) {
      const originalChildren = Array.from(containerRef.current.children).slice(
        0,
        containerRef.current.children.length / duplicateCount
      )
      let totalWidth = 0

      // Sum up the width of each child including margins set by CSS
      originalChildren.forEach((child) => {
        const childElement = child as HTMLElement
        const style = getComputedStyle(childElement)
        const width = childElement.offsetWidth
        const marginRight = parseFloat(style.marginRight)
        totalWidth += width + marginRight
      })

      originalContentWidth.current = totalWidth

      // Adjust duplicate count based on the container's width
      const containerWidth = containerRef.current.clientWidth
      if (originalContentWidth.current < containerWidth) {
        const duplicatesNeeded =
          Math.ceil(containerWidth / originalContentWidth.current) + 1
        setDuplicateCount(duplicatesNeeded)
      } else {
        setDuplicateCount(2)
      }
    }
  }, [children, gap])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const handleWheelScroll = (e: React.WheelEvent) => {
    if (containerRef.current) {
      // Use both deltaY and deltaX to support all scroll directions
      containerRef.current.scrollBy({
        left: e.deltaX + e.deltaY,
        behavior: 'smooth'
      })
    }
  }

  // Use predefined Tailwind gap classes
  const gapClass = gapClasses[gap] || 'gap-4' // Default to "gap-4" if the value isn't in the map

  return (
    <div
      className={clsx('flex', 'overflow-hidden', gapClass, className)}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheelScroll}
    >
      {/* Render enough duplicates to cover the container */}
      {Array.from({ length: duplicateCount }).map((_, index) => (
        <React.Fragment key={index}>{children}</React.Fragment>
      ))}
    </div>
  )
}
