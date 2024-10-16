'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const NavLink = ({
  className,
  selectedClassName,
  href,
  children,
  exact=false,
  underline=false,
  ...props
}: {
  className?: string,
  selectedClassName?: string,
  href: string,
  children: ReactNode | ReactNode[],
  exact: boolean,
  underline: boolean
}) => {
  const pathname = usePathname()
  const matches = exact ? pathname == href : pathname.startsWith(href)
  return (
    <Link
      className={matches ? selectedClassName : className}
      href={href}
      {...props}
    >
      {children}
      {underline && matches ? (
        <motion.span
          className={`absolute left-0 bottom-0 right-0 h-[2px] bg-link-hover`}
          layoutId="underline"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        />
      ) : ''}
    </Link>
  )
}

export default NavLink
