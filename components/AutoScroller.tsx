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

export const AutoScroller = ({
  className,
  direction = 'left',
  speed = 40,
  gap = 4, // Default gap to Tailwind's "gap-4" (1rem)
  children
}: {
  className?: string
  direction: 'left' | 'right'
  speed?: number
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 // Unitless gap (e.g., 1, 2, 4, 8 for Tailwind's spacing scale)
  children: ReactNode | ReactNode[]
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const originalContentWidth = useRef<number>(0)
  const gapSize = useRef<number>(0) // Store the actual gap size in pixels
  const [duplicateCount, setDuplicateCount] = useState(1) // Default to one duplicate
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
          const currentScroll = containerRef.current.scrollLeft

          // Calculate the total width including gaps to determine the reset point
          const resetScrollAt = originalContentWidth.current + gapSize.current
          let newScrollPosition =
            (currentScroll + scrollAmount * directionMultiplier) % resetScrollAt

          // Adjust for negative positions (when scrolling right)
          if (newScrollPosition < 0) {
            newScrollPosition += resetScrollAt
          }

          containerRef.current.scrollTo({
            left: newScrollPosition
          })

          // Subtract the integer part from the accumulated offset, keeping the remainder
          accumulatedOffset.current -= scrollAmount

          lastTimestamp.current = timestamp
        }
      }

      animationFrameId.current = requestAnimationFrame(scroll)
    },
    [isPaused, direction, speed]
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

  // Dynamically calculate the width of the original set of cards and the gap size
  useEffect(() => {
    if (containerRef.current) {
      const originalChildren = Array.from(containerRef.current.children).slice(
        0,
        Math.floor(containerRef.current.children.length / (duplicateCount + 1))
      )

      let totalWidth = 0

      // Sum up the width of each child
      originalChildren.forEach((child) => {
        const childElement = child as HTMLElement
        const width = childElement.offsetWidth
        totalWidth += width
      })

      // Determine the gap size (e.g., based on the Tailwind `gap-X` equivalent)
      const containerStyle = getComputedStyle(containerRef.current)
      const actualGap = parseFloat(containerStyle.getPropertyValue('gap'))
      gapSize.current = isNaN(actualGap) ? 0 : actualGap

      // Add gaps into total width
      totalWidth += gapSize.current * (originalChildren.length - 1)

      originalContentWidth.current = totalWidth

      // Determine how many duplicates are needed
      const containerWidth = containerRef.current.clientWidth
      let newDuplicateCount = 1
      if (originalContentWidth.current < containerWidth) {
        // Case 1: Original content is less than container width
        newDuplicateCount =
          Math.ceil(containerWidth / originalContentWidth.current) + 1
      }

      // Only update if it changes to prevent infinite loops
      if (newDuplicateCount !== duplicateCount) {
        setDuplicateCount(newDuplicateCount)
      }
    }
  }, [children, gap, duplicateCount])

  const handlePause = () => setIsPaused(true)

  const handleResume = () => {
    setIsPaused(false)
    lastTimestamp.current = null // Reset timestamp to prevent snapping
    accumulatedOffset.current = 0 // Reset accumulated offset to prevent jumps
  }

  const handleWheelScroll = (e: React.WheelEvent) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: e.deltaX
      })
    }
  }

  const gapClass = gapClasses[gap] || 'gap-4' // Default to "gap-4" if the value isn't in the map

  return (
    <div
      className={clsx(
        'scrollbar-hidden',
        'flex',
        'overflow-x-auto',
        gapClass,
        className
      )}
      ref={containerRef}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
      onWheel={handleWheelScroll}
      onTouchStart={handlePause}
      onTouchEnd={handleResume}
    >
      {/* Render the original content */}
      {children}

      {/* Render enough duplicates to cover the component */}
      {Array.from({ length: duplicateCount }).map((_, index) => (
        <React.Fragment key={index}>{children}</React.Fragment>
      ))}
    </div>
  )
}
