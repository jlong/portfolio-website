import React, { ReactNode } from 'react'
import { clsx } from 'clsx'

export const Container = ({
  className,
  children
}: {
  className: string
  children: ReactNode | ReactNode[]
}) => {
  return (
    <div
      className={clsx(
        'flex-col',
        'w-full',
        'max-w-[1100px]',
        'mx-auto',
        className
      )}
    >
      {children}
    </div>
  )
}
