import Link from 'next/link'
import Icon from '@/components/Icon'

const styles = {
  link: 'w-7 h-7 group flex flex-none items-center justify-center rounded-2xl  bg-depth-1 hover:bg-depth-2',
  icon: 'w-4 h-4 block opacity-80 group-hover:opacity-100'
}

const IconButton = ({ uid, href, tip }) => (
  <Link className={styles.link} href={href} title={tip}>
    <Icon className={styles.icon} uid={uid} />
  </Link>
)

export default IconButton
