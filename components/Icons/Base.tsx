import { PropsWithChildren } from 'react'

export interface BaseProps {
  size?: number
  viewBox?: string
  className?: string
}

export const Base = ({
  size = 24,
  viewBox = '0 0 24 24',
  className,
  children
}: PropsWithChildren<BaseProps>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={viewBox}
    fill="currentColor"
    className={`${className} shrink-0`}
  >
    {children}
  </svg>
)
