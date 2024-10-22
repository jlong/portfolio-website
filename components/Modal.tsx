'use client'

import { useState, useEffect, useRef } from 'react'
import IconButton from '@/components/IconButton'
import clsx from 'clsx'

export const Modal = ({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean
  onClose?: () => void
  children: React.ReactNode
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      if (modalRef.current && !modalRef.current.open) {
        modalRef.current.showModal()
      }
    } else if (modalRef.current && modalRef.current.open) {
      modalRef.current.close()
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleCancel = () => {
    onClose && onClose()
  }

  if (!mounted) return null

  return (
    <dialog
      ref={modalRef}
      className={clsx(
        'flex min-h-[200px] min-w-[300px] flex-col',
        'rounded-2xl p-4 transition-all duration-500',
        '-translate-y-10 opacity-0',
        'open:translate-y-0 open:opacity-100',
        'backdrop:bg-dark-depth-0/80 backdrop:backdrop-blur-sm',
        'backdrop:opacity-0 backdrop:transition-opacity backdrop:duration-1000',
        'open:backdrop:opacity-100 open:backdrop:backdrop-blur-lg'
      )}
      aria-labelledby="modal-title"
      onCancel={handleCancel}
    >
      <IconButton
        uid="x"
        onClick={handleCancel}
        className="absolute right-3 top-3"
        size="small"
        aria-label="Close"
      />
      {children}
    </dialog>
  )
}

export default Modal
