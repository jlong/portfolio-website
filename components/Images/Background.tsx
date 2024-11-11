'use client'

import { useEffect, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

export const Background = () => {
  const [size, setSize] = useState({ width: 0, height: 0 })
  const { scrollYProgress } = useScroll()
  const left = useTransform(() => scrollYProgress.get() * (-5285 + size.width))

  useEffect(() => {
    setSize(document.documentElement.getBoundingClientRect())
    window.addEventListener('resize', () =>
      setSize(document.documentElement.getBoundingClientRect())
    )
  }, [])

  return (
    <div
      className="absolute left-0 top-0 hidden w-screen overflow-clip dark:block"
      style={{ height: size.height + 'px' }}
    >
      <motion.svg
        width="5285"
        height="5285"
        viewBox="0 0 5285 5285"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0 blur-[400px]"
        style={{ left: left }}
      >
        <path
          opacity="0.8"
          d="M2262.65 2856.5L2639.36 2415.96L2538.29 3332.06L2122 3765.22L2262.65 2856.5Z"
          fill="#292D56"
        />
        <path
          opacity="0.8"
          d="M4646.65 4376.28L5023.36 3935.74L4922.29 4851.84L4506 5285L4646.65 4376.28Z"
          fill="#00ADDA"
        />
        <path
          opacity="0.8"
          d="M3255.82 2008.86L3632.99 1568.32L3531.8 2484.42L3115 2917.58L3255.82 2008.86Z"
          fill="#F7934E"
        />
        <path
          opacity="0.8"
          d="M3821.65 3085.53L4198.36 2644.99L4097.29 3561.08L3681 3994.25L3821.65 3085.53Z"
          fill="#FFCC54"
        />
        <path
          opacity="0.8"
          d="M1745.65 1575.94L2122.36 1135L2021.29 2051.94L1605 2485.5L1745.65 1575.94Z"
          fill="#00ADDA"
        />
        <path
          opacity="0.5"
          d="M429.395 440.536L806.108 0L705.038 916.093L288.746 1349.26L429.395 440.536Z"
          fill="#9DDAE6"
        />
        <path
          opacity="0.7"
          d="M2640 2750.98L3017.16 2310.44L2915.97 3226.54L2499.18 3659.7L2640 2750.98Z"
          fill="#F74874"
        />
      </motion.svg>
    </div>
  )
}
