'use client'

import { useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'
import clsx from 'clsx'

type Theme = 'dark' | 'light' | 'system'

type MenuItemProps = {
  onSelect: () => void
  children: ReactNode | ReactNode[]
}

const MenuItem = ({ onSelect, children }: MenuItemProps) => (
  <DropdownMenu.Item onSelect={onSelect} className="cursor-pointer px-2 py-1">
    {children}
  </DropdownMenu.Item>
)

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(
    typeof window !== 'undefined' && localStorage.getItem('theme')
      ? (localStorage.getItem('theme') as Theme)
      : 'dark'
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else if (theme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', 'system')
    }
  }, [theme])

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="rounded-md border p-1 text-bold dark:text-dark-bold">
        Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          sideOffset={4}
          className={clsx(
            'data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade',
            'min-w-[220px]',
            'rounded-md',
            'text-default dark:text-dark-default',
            'bg-depth-0 dark:bg-dark-depth-1 dark:backdrop-blur-2xl',
            'p-[5px]',
            'shadow-xl ring-1 ring-black/10',
            'will-change-[opacity,transform]',
            'z-50'
          )}
        >
          <MenuItem onSelect={() => handleThemeChange('dark')}>Dark</MenuItem>
          <MenuItem onSelect={() => handleThemeChange('light')}>Light</MenuItem>
          <MenuItem onSelect={() => handleThemeChange('system')}>
            System
          </MenuItem>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
