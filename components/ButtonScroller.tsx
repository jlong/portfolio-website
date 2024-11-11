'use client'

import React, {
  useRef,
  useState,
  useEffect,
  ReactNode,
  CSSProperties
} from 'react'
import { clsx } from 'clsx'
import Icon from '@/components/Icon'

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

      // Attach resize observer
      let resizeObserver: ResizeObserver | null = null
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => {
          checkForScrollPosition()
        })
        resizeObserver.observe(scrollContainer)
      }

      // Clean up the event listeners
      return () => {
        scrollContainer.removeEventListener('scroll', checkForScrollPosition)
        if (resizeObserver) {
          resizeObserver.disconnect()
        }
      }
    }
  }, [])

  // Compute the mask style based on scroll position
  const maskStyle = React.useMemo(() => {
    if (canScrollLeft && canScrollRight) {
      return {
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      } as CSSProperties
    } else if (canScrollLeft) {
      return {
        maskImage:
          'linear-gradient(to right, transparent, transparent 16px, black 48px, black)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, transparent 16px, black 48px, black)'
      } as CSSProperties
    } else if (canScrollRight) {
      return {
        maskImage:
          'linear-gradient(to right, black, black calc(100% - 48px), transparent calc(100% - 16px), transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, black, black calc(100% - 48px), transparent calc(100% - 16px), transparent)'
      } as CSSProperties
    } else {
      return {}
    }
  }, [canScrollLeft, canScrollRight])

  return (
    <div className={clsx('relative', 'w-full', className)}>
      {canScrollLeft && (
        <button
          aria-label="Scroll left"
          className={clsx(
            'absolute left-0 top-1/2 z-10 -translate-y-1/2 transform',
            'flex items-center justify-center',
            'text-default dark:text-dark-default',
            'bg-depth-2 backdrop-blur-lg hover:bg-depth-3 dark:bg-dark-depth-2 dark:hover:bg-dark-depth-3',
            'rounded-full',
            'p-1'
          )}
          onClick={() => scrollByOffset(-(scroller.current?.clientWidth || 0))}
        >
          <Icon uid="left-chevron" />
        </button>
      )}

      <div
        ref={scroller}
        className={clsx(
          'flex w-full gap-4',
          'scrollbar-hidden overflow-x-auto',
          'transition-all duration-300'
        )}
        style={maskStyle}
      >
        {children}
      </div>

      {canScrollRight && (
        <button
          aria-label="Scroll right"
          className={clsx(
            'absolute right-0 top-1/2 z-10 -translate-y-1/2 transform',
            'flex items-center justify-center',
            'text-default dark:text-dark-default',
            'bg-depth-2 backdrop-blur-lg hover:bg-depth-3 dark:bg-dark-depth-2 dark:hover:bg-dark-depth-3',
            'rounded-full',
            'p-1'
          )}
          onClick={() => scrollByOffset(scroller.current?.clientWidth || 0)}
        >
          <Icon uid="right-chevron" />
        </button>
      )}
    </div>
  )
}
