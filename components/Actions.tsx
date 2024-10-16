import React, { ReactNode } from "react"
import clsx from 'clsx'

export const Actions = ({className, children}: {
  className: string,
  children: ReactNode | ReactNode[]
}) => {
  return (
    <div
      className={clsx('flex', 'gap-2', className)}
    >
      {children}
    </div>
  )
}

