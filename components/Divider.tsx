import React from "react"
import clsx from 'clsx'

export const Divider = ({className}: { className: string }) => {
  return (
    <hr className={clsx('border-t', 'border-border', className)} />
  )
}

