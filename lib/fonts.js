import { Manrope } from 'next/font/google'

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['800'],
  variable: '--font-manrope'
})

export const linkStyles = `
  text-link
  decoration-link/20
  decoration-2
  underline-offset-4
  font-normal

  hover:text-link-hover
  hover:decoration-link-hover/20

  visited:text-link-visited
  visited:decoration-link-visited/20
`

export const proseStyles = `
  prose-default

  prose-headings:font-display
  prose-body:font-body

  prose-a:text-link
  prose-a:decoration-link/20
  prose-a:decoration-2
  prose-a:underline-offset-4
  prose-a:font-normal

  hover:prose-a:text-link-hover
  hover:prose-a:decoration-link-hover/20

  visited:prose-a:text-link-visited
  visited:prose-a:decoration-link-visited/20
`
