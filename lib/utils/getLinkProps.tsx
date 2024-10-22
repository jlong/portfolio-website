export const getLinkProps = (href: string) => {
  if (href && /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(href)) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  }
  return {}
}
