'use client'

import { clsx } from 'clsx'
import React, { useRef, useState, useEffect, ReactNode } from 'react'

export const ButtonScroller = ({
  className,
  children
}: {
  className?: string
  children: ReactNode | ReactNode[]
}) => {
  const scroller = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false)
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false)

  // Function to check if scrolling is possible to the left or right
  const checkForScrollPosition = () => {
    const scrollContainer = scroller.current
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth)
    }
  }

  // Function to scroll by a specific offset
  const scrollByOffset = (offset: number) => {
    const scrollContainer = scroller.current
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: offset,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const scrollContainer = scroller.current
    if (scrollContainer) {
      checkForScrollPosition()

      // Attach scroll event listener
      scrollContainer.addEventListener('scroll', checkForScrollPosition)

      // Clean up the event listener
      return () => {
        scrollContainer.removeEventListener('scroll', checkForScrollPosition)
      }
    }
  }, [])

  return (
    <div className={clsx('relative', 'w-full', className)}>
      {canScrollLeft && (
        <button
          aria-label="Scroll left"
          className={clsx(
            'absolute bottom-0 left-0 top-0 z-10',
            'flex items-center justify-center',
            'bg-white bg-opacity-70 p-2'
          )}
          onClick={() => scrollByOffset(-(scroller.current?.clientWidth || 0))}
        >
          &#9664;
        </button>
      )}

      <div
        ref={scroller}
        className={clsx(
          'scrollbar-hidden',
          'flex gap-4',
          'w-full',
          'overflow-x-auto'
        )}
      >
        {children}
      </div>

      {canScrollRight && (
        <button
          aria-label="Scroll right"
          className={clsx(
            'absolute bottom-0 right-0 top-0 z-10',
            'flex items-center justify-center',
            'bg-white bg-opacity-70 p-2'
          )}
          onClick={() => scrollByOffset(scroller.current?.clientWidth || 0)}
        >
          &#9654;
        </button>
      )}
    </div>
  )
}
