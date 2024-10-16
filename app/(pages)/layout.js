import Chrome from '@/components/Chrome'
import {proseStyles} from '@/lib/fonts'

const Layout = ({children}) => (
  <Chrome>
    <article className={`prose lg:prose-xl ${proseStyles} py-8`}>
      {children}
    </article>
  </Chrome>
)

export default Layout
