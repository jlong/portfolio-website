import ZestIcons from 'zest-pro'

const Icon = ({uid, paths, size=24, color='currentColor', valign, className}) => {
  let style;
  if (uid) {
    if (!(uid in ZestIcons)) { throw new Error("Invalid UID for icon: " + uid) }
    paths = ZestIcons[uid].paths
  }
  if (valign) {
    style = { verticalAlign: valign }
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style}>
      <g fill={color} dangerouslySetInnerHTML={{ __html: paths }} />
    </svg>
  )
}

export default Icon
