import React, { ReactNode } from 'react'
import clsx from 'clsx'

export const Actions = ({
  block = false,
  className,
  children
}: {
  block?: boolean
  className?: string
  children: ReactNode | ReactNode[]
}) => {
  return (
    <div
      className={clsx(
        'flex',
        block && 'flex-col gap-2',
        !block && 'items-center gap-4',
        className
      )}
    >
      {children}
    </div>
  )
}
