import React, { ReactNode } from "react"

export const Container = ({className, children}: {
  className: string,
  children: ReactNode | ReactNode[]
}) => {
  return (
    <div
      className={`flex-col max-w-[1100px] mx-auto ${className}`}
    >
      {children}
    </div>
  )
}

