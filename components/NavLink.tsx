'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { getLinkProps } from '@/lib/utils/getLinkProps'

const NavLink = ({
  className,
  selectedClassName,
  href,
  children,
  exact = false,
  underline = false,
  ...props
}: {
  className?: string
  selectedClassName?: string
  href: string
  children: ReactNode | ReactNode[]
  exact?: boolean
  underline: boolean
}) => {
  const pathname = usePathname()
  const matches = exact ? pathname == href : pathname.startsWith(href)
  const linkProps = getLinkProps(href)
  return (
    <Link
      className={matches ? selectedClassName : className}
      href={href}
      {...linkProps}
      {...props}
    >
      {children}
      {underline && matches ? (
        <motion.span
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-link-hover`}
          layoutId="underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      ) : (
        ''
      )}
    </Link>
  )
}

export default NavLink
