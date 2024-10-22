import clsx from 'clsx'
import { textboxStyles } from '@/components/Textbox'
import { InputHTMLAttributes } from 'react'

export const Textarea = ({
  size = 'default',
  className
}: {
  size?: 'small' | 'default' | 'large'
  className?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>) => {
  return (
    <textarea
      className={clsx(textboxStyles.base, textboxStyles.size[size], className)}
      rows={4}
    ></textarea>
  )
}
