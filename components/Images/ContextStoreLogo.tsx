import Image from 'next/image'
import icon from '@/images/contextstore-icon.png'

export const ContextStoreLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="260"
    height="52"
    fill="none"
    viewBox="0 0 260 52"
  >
    <title>ContextStore</title>
    <image href={icon.src} x="20" y="2" width="48" height="48" />
    <text
      x="80"
      y="35"
      fontFamily="var(--font-manrope), ui-sans-serif, system-ui, sans-serif"
      fontSize="24"
      fontWeight="800"
      fill="currentColor"
      className="text-bold dark:text-dark-bold"
    >
      ContextStore
    </text>
  </svg>
)
