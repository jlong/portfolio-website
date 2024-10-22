import { ReactNode } from 'react'
import { Label } from '@/components/Label'
import clsx from 'clsx'

export const LabeledControl = ({
  label,
  className,
  children
}: {
  label: string
  className?: string
  children: ReactNode | ReactNode[]
}) => {
  return (
    <label className={clsx('flex', 'flex-col', 'gap-0.25', className)}>
      <Label>{label}</Label>
      {children}
    </label>
  )
}
