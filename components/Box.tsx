import React, { ReactNode } from "react"
import clsx from 'clsx'

export const Box = ({className, children}: {
  className: string,
  children: ReactNode | ReactNode[]
}) => {
  return (
    <div
      className={clsx('flex', 'flex-col', 'gap-4', className)}
    >
      {children}
    </div>
  )
}

