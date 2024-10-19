import React from 'react'

interface SpinnerProps {
  title?: string
  className?: string
  size?: number
  strokeWidth?: number
}

export const Spinner = ({
  title = 'Loading',
  className = '',
  size = 20,
  strokeWidth = 3
}: SpinnerProps) => {
  const r = (size - strokeWidth) / 2
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`animate-spin ${className}`}
    >
      <title>{title}&#8230;</title>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        style={{ opacity: 0.35 }}
      />
      <path
        d={`
          M ${size / 2} ${strokeWidth / 2}
          A ${r} ${r} 0 0 1 ${size - strokeWidth / 2} ${size / 2}
        `}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  )
}
