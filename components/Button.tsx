import React, { PropsWithChildren, ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { Spinner } from './Spinner'
import Link from 'next/link'
import { LinkProps } from 'next/link'
import { getLinkProps } from '@/lib/utils/getLinkProps'

const styles = {
  base: 'relative justify-center rounded-lg font-semibold outline-border-focus outline-1 outline-offset-2',
  kind: {
    primary:
      'text-button-primary-text bg-button-primary-background hover:text-button-primary-hover-text hover:bg-button-primary-hover-background dark:text-dark-button-primary-text dark:bg-dark-button-primary-background dark:hover:text-dark-button-primary-hover-text dark:hover:bg-dark-button-primary-hover-background',
    secondary:
      'text-button-secondary-text bg-button-secondary-background hover:text-button-secondary-hover-text hover:bg-button-secondary-hover-background dark:text-dark-button-secondary-text dark:bg-dark-button-secondary-background dark:hover:text-dark-button-secondary-hover-text dark:hover:bg-dark-button-secondary-hover-background',
    disabled: 'text-loud bg-slate-200 opacity-50 cursor-not-allowed'
  },
  size: {
    small: 'px-1.5 py-1 md:text-lg md:px-2 md:py-0.75',
    default: 'px-2 py-1.25 md:text-lg md:px-3 md:py-1',
    large: 'px-3 py-1.25 text-lg md:text-xl md:px-4 md:py-1.5'
  },
  block: 'flex w-full',
  inline: 'inline-flex',
  working: '!text-transparent cursor-not-allowed',
  notWorking: ''
}

const spinnerStyles = {
  primary: 'text-white-100',
  secondary: 'text-loud',
  disabled: 'text-loud'
}

type ButtonAsButtonProps = {
  as?: 'button'
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonAsLinkProps = {
  as: typeof Link
  href: string
} & LinkProps

export type ButtonProps = {
  kind?: keyof typeof styles.kind
  size?: keyof typeof styles.size
  block?: boolean
  disabled?: boolean
  working?: boolean
  className?: string
} & (ButtonAsButtonProps | ButtonAsLinkProps)

export const Button = ({
  as = 'button',
  children,
  kind = 'secondary',
  size = 'default',
  block = false,
  disabled = false,
  working = false,
  className = '',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const commonClassName = clsx(
    styles.base,
    disabled ? styles.kind['disabled'] : styles.kind[kind],
    styles.size[size],
    styles[block ? 'block' : 'inline'],
    styles[working ? 'working' : 'notWorking'],
    className
  )

  const spinner = working && (
    <Spinner
      className={clsx('absolute', spinnerStyles[disabled ? 'disabled' : kind])}
    />
  )

  if (as === Link) {
    const { href, ...linkProps } = props as ButtonAsLinkProps
    const additionalLinkProps = getLinkProps(href)
    return (
      <Link
        href={href}
        className={commonClassName}
        {...linkProps}
        {...additionalLinkProps}
      >
        {spinner}
        {children}
      </Link>
    )
  } else {
    return (
      <button
        className={commonClassName}
        disabled={disabled || working}
        {...(props as ButtonAsButtonProps)}
      >
        {spinner}
        {children}
      </button>
    )
  }
}
