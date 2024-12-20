import Link, { LinkProps } from 'next/link'
import Icon from '@/components/Icon'
import { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'
import { getLinkProps } from '@/lib/utils/getLinkProps'

type IconButtonProps = {
  uid: string
  tip?: string
  size?: 'small' | 'default'
  className?: string
} & (
  | ({ as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: typeof Link } & LinkProps)
)

const IconButton = ({
  uid,
  tip,
  size = 'default',
  as: Component = 'button',
  className,
  ...props
}: IconButtonProps) => {
  const buttonClasses = clsx(
    'group',
    'flex flex-none items-center justify-center',
    size === 'small' &&
      'w-4 h-4 rounded-full hover:bg-depth-1 dark:hover:bg-dark-depth-1',
    size === 'default' &&
      'w-7 h-7 rounded-full bg-depth-1 dark:bg-dark-depth-1 hover:bg-depth-2 dark:hover:bg-dark-depth-2 backdrop-blur-2xl',
    className
  )
  const iconClasses = clsx(
    'block',
    'text-bold dark:text-dark-default dark:group-hover:text-dark-bold',
    size === 'small' && 'w-3 h-3',
    size === 'default' && 'w-4 h-4',
    'opacity-80 group-hover:opacity-100'
  )

  if (Component === 'button') {
    return (
      <button
        className={buttonClasses}
        title={tip}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        <Icon className={iconClasses} uid={uid} />
      </button>
    )
  }
  if (Component === Link) {
    const linkProps = getLinkProps((props as LinkProps).href)
    return (
      <Link
        className={buttonClasses}
        title={tip}
        {...linkProps}
        {...(props as LinkProps)}
      >
        <Icon className={iconClasses} uid={uid} />
      </Link>
    )
  }
  return null
}

export default IconButton
