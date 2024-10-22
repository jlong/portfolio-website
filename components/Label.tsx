import { ReactNode } from 'react'
import clsx from 'clsx'

export const Label = ({
  className,
  children
}: {
  className?: string
  children: ReactNode | ReactNode[]
}) => {
  return <div className={clsx('text-lg text-bold', className)}>{children}</div>
}
