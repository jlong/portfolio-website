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

const Header = ({children}) => (
  <header
    className={`sticky flex gap-2 items-stretch justify-between bg-white shadow-sm w-full p-2 lg:p-2.5`}
  >
    {children}
  </header>
)

const Nav = ({children}) => (
  <nav className={`flex gap-2 lg:gap-5 lg:mr-2 items-stretch`} role='navigation'>
    {children}
  </nav>
)

const NavItem = ({href, children}) => (
  <NavLink
    href={href}
    className={`relative flex items-center gap-0.25 transition-colors duration-400 text-quiet font-semibold hover:text-link-hover`}
    selectedClassName={`relative flex gap-1 items-center transition-colors duration-400 text-normal font-semibold hover:text-link-hover`}
    underline
  >
    {children}
  </NavLink>
)

const Footer = ({}) => (
  <footer className="flex flex-col flex-none items-center justify-stretch p-4">
    <Container>
      Made with ❤️ in North Carolina.
      Copyright &copy; John W. Long.
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
