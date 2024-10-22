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
      'text-button-primary-text bg-button-primary-background hover:text-button-primary-hover-text hover:bg-button-primary-hover-background',
    secondary:
      'text-button-secondary-text bg-button-secondary-background hover:text-button-secondary-hover-text hover:bg-button-secondary-hover-background',
    disabled: 'text-loud bg-slate-200 opacity-50 cursor-not-allowed'
  },
  size: {
    small: 'px-3 py-1 text-lg',
    medium: 'px-2 py-1 text-lg',
    large: 'px-4 py-1.5 text-xl'
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
  size = 'medium',
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
