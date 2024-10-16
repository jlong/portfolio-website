import Link from 'next/link'
import Icon from '@/components/Icon'
import ZestIcons from 'zest-pro'

const IconGridItem = ({icon, size}) => (
  <div className="">
    <Icon paths={icon.paths} size={size} />
  </div>
)

const ZestIconGrid = ({count, size=48}) => {
  const randomized =  [].concat(ZestIcons.all).sort(() => Math.random() - 0.5)

  const icons = randomized.slice(0, count)
  const items = icons.map((i) => <IconGridItem key={i.uid} icon={i} size={size} />)
  return (
    <div className="my-8 -mx-4">
      <div className="p-4 bg-slate-100 md:rounded-xl">
        <div className="grid gap-3 items-center justify-items-center" style={{gridTemplateColumns: `repeat(auto-fill, minmax(${size}px, 1fr))`}}>
          {items}
        </div>
      </div>
      <div class="text-base pt-4 mx-4">Zest Icons includes {ZestIcons.count} pixel-perfect icons for web and mobile applications. <Link href="https://zesticons.com">Learn more.</Link></div>
    </div>
  )
}

export default ZestIconGrid
