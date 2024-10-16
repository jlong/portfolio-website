import Link from 'next/link'
import Icon from '@/components/Icon'

const styles = {
  'link': 'w-5 h-5 flex flex-none items-center justify-center rounded-full hover:bg-slate-400/50',
  'icon': 'w-3 h-3 block'
}

const IconButton = ({uid, href, tip}) => (
  <Link className={styles.link} href={href} title={tip}>
    <Icon className={styles.icon} uid={uid} />
  </Link>
)

export default IconButton
