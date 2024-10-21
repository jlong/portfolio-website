import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import logo from '@/images/logo.svg'
import NavLink from '@/components/NavLink'
import { Button } from '@/components/Button'

const Logo = ({ href }) => (
  <Link href={href}>
    <Image src={logo} width="48" height="48" alt="John W. Long" />
  </Link>
)

const Header = ({ children }) => (
  <header
    className={`sticky top-0 z-50 flex w-full items-center justify-between gap-2 border-b border-border bg-white/70 p-2 backdrop-blur-lg`}
  >
    {children}
  </header>
)

const Nav = ({ children }) => (
  <nav
    className={`flex items-stretch gap-2 lg:mr-2 lg:gap-5`}
    role="navigation"
  >
    {children}
  </nav>
)

const NavItem = ({ href, children }) => (
  <NavLink
    href={href}
    className={`duration-400 relative flex items-center gap-0.25 text-xl font-medium text-default transition-colors hover:text-bold`}
    selectedClassName={`relative flex gap-1 items-center transition-colors duration-400 text-normal font-semibold hover:text-bold`}
    underline
  >
    {children}
  </NavLink>
)

const Footer = ({}) => (
  <footer className="flex flex-none flex-col items-center justify-stretch p-4">
    <Container className="text-center text-default">
      Made with ❤️ in North Carolina. Copyright &copy; John W. Long.
    </Container>
  </footer>
)

const Chrome = ({ children }) => (
  <>
    <Header>
      <div className="flex gap-4">
        <Logo href="/#top" />
        <Nav className>
          <NavItem href="/#about">About me</NavItem>
          <NavItem href="/#work">Work history</NavItem>
          <NavItem href="/#elsewhere">Elsewhere</NavItem>
        </Nav>
      </div>
      <Button size="small">Get in touch</Button>
    </Header>
    {children}
    <Footer />
  </>
)

export default Chrome
