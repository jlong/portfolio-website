import React, { PropsWithChildren } from 'react'
import { Spinner } from './Spinner'

const styles = {
  base: 'relative justify-center rounded-lg font-semibold border-2',
  kind: {
    primary:
      'text-button-primary-text bg-button-primary-background hover:text-button-primary-hover-text hover:bg-button-primary-hover-background border-transparent',
    secondary:
      'text-button-secondary-text bg-button-secondary-background hover:text-button-secondary-hover-text hover:bg-button-secondary-hover-background border-transparent',
    disabled:
      'text-loud bg-slate-200 border-transparent opacity-50 cursor-not-allowed'
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

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  kind?: keyof typeof styles.kind
  size?: keyof typeof styles.size
  block?: boolean
  disabled?: boolean
  working?: boolean
  className?: string
}

export const Button = ({
  children,
  type = 'button',
  kind = 'secondary',
  size = 'medium',
  block = false,
  disabled = false,
  working = false,
  className = '',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`
        ${styles.base}
        ${disabled ? styles.kind['disabled'] : styles.kind[kind]}
        ${styles.size[size]}
        ${styles[block ? 'block' : 'inline']}
        ${styles[working ? 'working' : 'notWorking']}
        ${className}
      `}
      disabled={disabled || working}
      {...props}
    >
      {working && (
        <Spinner
          className={`
            absolute
            ${disabled ? spinnerStyles['disabled'] : spinnerStyles[kind]}
          `}
        />
      )}
      {children}
    </button>
  )
}
