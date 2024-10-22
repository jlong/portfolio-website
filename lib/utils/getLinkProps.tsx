import { LinkProps } from 'next/link'

export const getLinkProps = (href: LinkProps['href']) => {
  if (typeof href === 'string' && /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(href)) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  }
  return {}
}
