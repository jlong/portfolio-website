import React, { ReactNode } from 'react'
import clsx from 'clsx'

export const BigQuote = ({
  className,
  children
}: {
  className: string
  children: ReactNode | ReactNode[]
}) => {
  return (
    <blockquote
      className={clsx(
        'flex grow flex-col gap-4',
        'prose dark:prose-invert',
        className
      )}
    >
      {children}
    </blockquote>
  )
}
