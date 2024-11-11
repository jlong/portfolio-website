import { ReactNode } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import logo from '@/images/logo.svg'
import NavLink from '@/components/NavLink'
import { Button } from '@/components/Button'
import ThemeToggle from './ThemeToggle'

const Logo = ({ href, className }: { href: string; className?: string }) => (
  <Link href={href} className={className}>
    <Image
      src={logo}
      width={48}
      height={48}
      alt="John W. Long"
      className="size-5 md:size-6"
    />
  </Link>
)

const Header = ({
  children,
  className
}: {
  children: ReactNode | ReactNode[]
  className?: string
}) => (
  <header
    className={clsx(
      'sticky top-0 z-50',
      'flex w-full items-center justify-between gap-2',
      'border-b border-border dark:border-dark-border',
      'bg-white/70 dark:bg-transparent',
      'p-1.5 backdrop-blur-lg md:p-2',
      className
    )}
  >
    {children}
  </header>
)

const Nav = ({
  children,
  className
}: {
  children: ReactNode | ReactNode[]
  className?: string
}) => (
  <nav
    className={clsx('hidden items-stretch gap-5 md:flex', className)}
    role="navigation"
  >
    {children}
  </nav>
)

const NavItem = ({
  href,
  children,
  className
}: {
  href: string
  children: ReactNode | ReactNode[]
  className?: string
}) => (
  <NavLink
    href={href}
    className={clsx(
      'relative',
      'flex items-center gap-0.25',
      'text-xl font-medium',
      'dark:hover:dark-text-bold text-default hover:text-bold dark:text-dark-default',
      'duration-400 transition-colors',
      className
    )}
    selectedClassName={clsx(
      'relative',
      'flex gap-1 items-center',
      'text-normal font-semibold',
      'text-bold dark:text-bold',
      'transition-colors duration-400',
      className
    )}
    underline
  >
    {children}
  </NavLink>
)

const Footer = ({ className }: { className?: string }) => (
  <footer
    className={clsx(
      'flex flex-none flex-col items-center justify-stretch',
      'p-4',
      className
    )}
  >
    <Container
      className={clsx(
        'text-sm md:text-base',
        'text-subtle dark:text-dark-subtle',
        'text-center'
      )}
    >
      Made with <strong className="text-bold dark:text-dark-bold">❤️</strong> in
      North Carolina. <span className="hidden md:inline">Copyright</span> &copy;
      John W. Long.
    </Container>
  </footer>
)

const Chrome = ({
  children,
  className
}: {
  children: ReactNode | ReactNode[]
  className?: string
}) => (
  <>
    <Header className={className}>
      <div className="flex gap-4">
        <Logo href="/#top" />
        <Nav>
          <NavItem href="/#about">About me</NavItem>
          <NavItem href="/#work">Work history</NavItem>
          <NavItem href="/#elsewhere">Elsewhere</NavItem>
        </Nav>
      </div>
      <div className="flex gap-1.5">
        <Button
          size="small"
          as={Link}
          href="https://www.linkedin.com/in/wiseheart"
        >
          Get in touch
        </Button>
        <ThemeToggle />
      </div>
    </Header>
    {children}
    <Footer />
  </>
)

export default Chrome
