import React, { ReactNode } from "react"
import clsx from 'clsx'

export const Section = ({className, children}: {
  className: string,
  children: ReactNode | ReactNode[]
}) => {
  return (
    <section
      className={clsx('flex-col px-2.5 py-10', className)}
    >
      {children}
    </section>
  )
}
