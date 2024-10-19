import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

export const Avatar = ({
  alt,
  className,
  size = 32,
  src
}: {
  alt: string
  className: string
  size: number
  src: string
}) => {
  return (
    <div
      className={clsx(
        'flex',
        'rounded-full',
        'border-2',
        'border-[#9ddae6]/60',
        'overflow-clip',
        'inline-block',
        'flex-shrink-0',
        className
      )}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image alt={alt} src={src} width={size} height={size} />
    </div>
  )
}
