'use client'

import { useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'
import clsx from 'clsx'
import { SunIcon } from '@/components/Icons/SunIcon'
import { MoonWithStarBurstIcon } from '@/components/Icons/MoonWithStartburstIcon'
import Icon from './Icon'
import { ComputerIcon } from './Icons/ComputerIcon'

type Theme = 'dark' | 'light' | 'system'

type MenuItemProps = {
  onSelect: () => void
  checked?: boolean
  children: ReactNode | ReactNode[]
}

const MenuItem = ({ onSelect, checked = false, children }: MenuItemProps) => (
  <DropdownMenu.Item
    onSelect={onSelect}
    className={clsx(
      'flex items-center gap-1',
      'px-1 py-1',
      'cursor-pointer',
      'outline-0',
      'rounded',
      'hover:bg-depth-1 dark:hover:bg-dark-depth-1',
      checked
        ? 'text-link dark:text-dark-link'
        : 'text-default dark:text-dark-default'
    )}
  >
    {checked ? <Icon uid="check" size={16} /> : <span className="w-2" />}
    {children}
  </DropdownMenu.Item>
)

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(
    typeof window !== 'undefined' && localStorage.getItem('theme')
      ? (localStorage.getItem('theme') as Theme)
      : 'dark'
  )
  const [prefersDark, setPrefersDark] = useState(false)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else if (theme === 'system') {
      const prefersDarkColorScheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      if (prefersDarkColorScheme) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('theme', 'system')
      setPrefersDark(prefersDarkColorScheme)
    }
  }, [theme])

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className={clsx(
          'flex size-5 items-center justify-center',
          'rounded-full',
          'hover:depth-2 data-[state=open]:bg-depth-2 dark:hover:bg-dark-depth-2 dark:data-[state=open]:bg-dark-depth-2',
          'text-bold dark:text-dark-bold'
        )}
      >
        {theme === 'light' || (theme === 'system' && !prefersDark) ? (
          <SunIcon size={20} />
        ) : (
          <MoonWithStarBurstIcon size={20} />
        )}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          align="end"
          sideOffset={4}
          className={clsx(
            'data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade',
            'min-w-[160px]',
            'rounded-lg',
            'text-default dark:text-dark-default',
            'bg-depth-0 dark:bg-dark-depth-1 dark:backdrop-blur-2xl',
            'p-[5px]',
            'shadow-xl ring-1 ring-black/10',
            'will-change-[opacity,transform]',
            'z-50'
          )}
        >
          <MenuItem
            onSelect={() => handleThemeChange('dark')}
            checked={theme === 'dark'}
          >
            <MoonWithStarBurstIcon size={20} />
            Dark
          </MenuItem>
          <MenuItem
            onSelect={() => handleThemeChange('light')}
            checked={theme === 'light'}
          >
            <SunIcon size={20} />
            Light
          </MenuItem>
          <MenuItem
            onSelect={() => handleThemeChange('system')}
            checked={theme === 'system'}
          >
            <ComputerIcon size={20} />
            System
          </MenuItem>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
