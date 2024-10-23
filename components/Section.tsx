import React, { ReactNode } from 'react'
import clsx from 'clsx'

const paddingXClass = {
  0: 'px-0',
  1: 'px-1',
  2: 'px-2',
  2.5: 'px-2.5',
  3: 'px-3',
  4: 'px-4',
  5: 'px-5',
  6: 'px-6',
  7: 'px-7',
  8: 'px-8',
  9: 'px-9',
  10: 'px-10'
}

const paddingYClass = {
  0: 'md:py-0',
  1: 'md:py-1',
  2: 'md:py-2',
  3: 'md:py-3',
  4: 'md:py-4',
  5: 'md:py-5',
  6: 'md:py-6',
  7: 'md:py-7',
  8: 'md:py-8',
  9: 'md:py-9',
  10: 'md:py-10'
}

export const Section = ({
  id,
  className,
  paddingX = 2.5,
  paddingY = 10,
  children
}: {
  id?: string
  className?: string
  paddingX: 0 | 1 | 2 | 2.5 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  paddingY: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  children: ReactNode | ReactNode[]
}) => {
  return (
    <section
      id={id}
      className={clsx(
        'flex',
        'flex-col',
        'gap-8',
        paddingXClass[paddingX],
        paddingYClass[paddingY],
        'py-4',
        className
      )}
    >
      {children}
    </section>
  )
}
