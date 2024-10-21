import React from 'react'
import ZestIcons from 'zest-pro'

type IconProps = {
  uid?: string
  paths?: string
  size?: number
  color?: string
  valign?: string
  className?: string
}

const Icon: React.FC<IconProps> = ({
  uid,
  paths,
  size = 24,
  color = 'currentColor',
  valign,
  className
}) => {
  let style: React.CSSProperties | undefined
  let svgPaths = paths

  if (uid) {
    if (!(uid in ZestIcons)) {
      throw new Error('Invalid UID for icon: ' + uid)
    }
    svgPaths = ZestIcons[uid].paths
  }

  if (valign) {
    style = { verticalAlign: valign }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={style}
    >
      <g fill={color} dangerouslySetInnerHTML={{ __html: svgPaths || '' }} />
    </svg>
  )
}

export default Icon
