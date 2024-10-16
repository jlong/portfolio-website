import React, { ReactNode } from "react"
import clsx from 'clsx'

const sizes = {
  h1: 'text-5xl/tight font-bold',
  h2: 'text-4xl/tight font-bold',
  h3: ''
}

export const Heading = ({as, className, children}: {
  as: 'h1' | 'h2' | 'h2',
  className: string,
  children: ReactNode | ReactNode[]
}) => {
  return (
    <div
      className={clsx('font-display', sizes[as], className)}
    >
      {children}
    </div>
  )
}


export const Eyebrow = ({className, children}: {
  className: string,
  children: ReactNode | ReactNode[]
}) => {
  return (
    <div
      className={clsx('font-display', 'text-2xl', 'mb-2', className)}
    >
      {children}
    </div>
  )
}
