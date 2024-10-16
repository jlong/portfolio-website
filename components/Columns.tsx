import React, { ReactNode } from "react"
import clsx from 'clsx'

interface LayoutProps {
  'sm'?: string
  'md'?: string
  'lg'?: string
  'xl'?: string
  '2xl'?: string
}
type LayoutKeys = keyof LayoutProps
const layoutKeys: LayoutKeys[] = ['sm', 'md', 'lg', 'xl', '2xl']

const gridTemplateAreas = (
  resolution: LayoutKeys,
  columnTemplate: string | undefined
) : string | undefined => (
  columnTemplate ? `${resolution}:grid-cols-${columnTemplate}` : undefined
)

const layoutToClasses = (layout: LayoutProps): Array<string|undefined> => (
  layoutKeys.map((resolution) => gridTemplateAreas(resolution, layout[resolution]))
)

export const Columns = ({layout, className, children}: {
  layout: LayoutProps,
  className: string,
  children: ReactNode | ReactNode[]
}) => {
  const layoutClasses = layoutToClasses(layout)
  return (
    <div className={clsx('grid', 'gap-5', layoutClasses, className)}>
      {children}
    </div>
  )
}

