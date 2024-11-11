import React, { ReactNode, ElementType } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

export const ImageWell = ({
  zoom = false,
  href,
  ribbon,
  className,
  children
}: {
  href?: string
  zoom?: boolean
  ribbon?: string
  className?: string
  children: ReactNode | ReactNode[]
}) => {
  const Component: ElementType = href ? Link : 'div'
  const additionalProps = href ? { href } : {}

  return (
    <Component
      {...(additionalProps as any)} // Type assertion to bypass TypeScript conflicts
      className={clsx(
        'group',
        'relative',
        'flex shrink-0 items-center justify-center',
        'h-[148px] w-[236px] md:h-[198px] md:w-[316px]',
        'bg-depth-1 dark:bg-dark-depth-1',
        'border border-border dark:border-transparent',
        'rounded-2xl',
        'overflow-clip',
        className
      )}
    >
      <span
        className={clsx(
          'flex items-center justify-center',
          zoom &&
            'scale-75 transition-transform duration-300 group-hover:scale-90 md:scale-100 md:group-hover:scale-110'
        )}
      >
        {children}
      </span>
      {ribbon && (
        <span
          className={clsx(
            'absolute -right-5 bottom-5 -rotate-45',
            'flex',
            'px-6',
            'transition-all duration-500',
            'scale-125 opacity-0  group-hover:scale-100 group-hover:opacity-100',
            'whitespace-nowrap bg-pink text-white'
          )}
        >
          {ribbon}
        </span>
      )}
    </Component>
  )
}
