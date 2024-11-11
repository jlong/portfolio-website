import React, { ReactNode } from 'react'
import clsx from 'clsx'

export const Card = ({
  className,
  children
}: {
  className: string
  children: ReactNode | ReactNode[]
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-2',
        'bg-depth-1 dark:bg-dark-depth-1',
        'border border-border dark:border-transparent',
        'rounded-2xl',
        'p-3',
        'min-w-[340px]',
        className
      )}
    >
      {children}
    </div>
  )
}
