import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

export const textboxStyles = {
  base: 'rounded-lg font-body text-default border-2 border-border focus:text-bold focus:outline-none focus:border-border-focus focus-visible:border-border-focus',
  size: {
    small: 'px-1 py-1 text-lg',
    default: 'px-2 py-1 text-lg',
    large: 'px-4 py-1.5 text-xl'
  }
}

export const Textbox = ({
  size = 'default',
  className,
  ...props
}: {
  size?: 'small' | 'default' | 'large'
  className?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>) => {
  return (
    <input
      type="text"
      className={clsx(textboxStyles.base, textboxStyles.size[size], className)}
      {...props}
    />
  )
}
