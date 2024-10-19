import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import john from '@/images/john.svg'
import NavLink from '@/components/NavLink'
import { Button } from '@/components/Button'

const Logo = ({}) => (
  <Link href="/">
    <Image src={john} width="48" height="48" alt="John W. Long" />
  </Link>
)

const Header = ({ children }) => (
  <header
    className={`sticky flex w-full items-stretch justify-between gap-2 bg-white p-2 shadow-sm lg:p-2.5`}
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
    className={`duration-400 text-quiet relative flex items-center gap-0.25 font-semibold transition-colors hover:text-link-hover`}
    selectedClassName={`relative flex gap-1 items-center transition-colors duration-400 text-normal font-semibold hover:text-link-hover`}
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
      <Logo href="/" className="p-0.5" />
      <Nav>
        <NavItem href="#about">About me</NavItem>
        <NavItem href="#work">Work history</NavItem>
        <NavItem href="#elsewhere">Elsewhere</NavItem>
      </Nav>
      <Button>Get in touch</Button>
    </Header>
    {children}
    <Footer />
  </>
)

export default Chrome
