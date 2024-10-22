'use client'

import { ReactNode, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import logo from '@/images/logo.svg'
import NavLink from '@/components/NavLink'
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import { ContactForm } from '@/components/ContactForm'

const Logo = ({ href, className }: { href: string; className?: string }) => (
  <Link href={href} className={className}>
    <Image src={logo} width={48} height={48} alt="John W. Long" />
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
      'border-b border-border bg-white/70 p-2 backdrop-blur-lg',
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
      'duration-400 text-xl font-medium text-default transition-colors hover:text-bold',
      className
    )}
    selectedClassName={clsx(
      'relative',
      'flex gap-1 items-center',
      'transition-colors duration-400 text-normal font-semibold hover:text-bold',
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
    <Container className="text-center text-default">
      Made with ❤️ in North Carolina. Copyright &copy; John W. Long.
    </Container>
  </footer>
)

const Chrome = ({
  children,
  className
}: {
  children: ReactNode | ReactNode[]
  className?: string
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
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
        <Button size="small" onClick={() => setIsModalOpen(true)}>
          Get in touch
        </Button>
      </Header>
      {children}
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm />
      </Modal>
    </>
  )
}

export default Chrome
