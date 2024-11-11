'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ButtonScroller } from '@/components/ButtonScroller'
import IconButton from '@/components/IconButton'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

interface ImageGalleryProps {
  images: { src: string; alt: string }[]
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  )
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<
    'left' | 'right'
  >('right')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLayoutIdEnabled, setIsLayoutIdEnabled] = useState(true)

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (isPreviewOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isPreviewOpen])

  const openPreview = (index: number) => {
    setSelectedImageIndex(index)
    setIsPreviewOpen(true)
    setIsLayoutIdEnabled(true) // Enable layoutId for initial open transition
  }

  const closePreview = () => {
    setIsLayoutIdEnabled(true) // Enable layoutId for initial close transition
    setIsTransitioning(true)
    requestAnimationFrame(() => {
      setSelectedImageIndex(null)
      setIsPreviewOpen(false)
      setIsTransitioning(false)
    }) // Delay to ensure close animation completes without clipping
  }

  const showNextImage = () => {
    if (selectedImageIndex !== null) {
      setTransitionDirection('right')
      setIsTransitioning(true)
      setIsLayoutIdEnabled(false) // Disable layoutId for left/right transitions
      requestAnimationFrame(() => {
        setSelectedImageIndex((selectedImageIndex + 1) % images.length)
      })
    }
  }

  const showPreviousImage = () => {
    if (selectedImageIndex !== null) {
      setTransitionDirection('left')
      setIsTransitioning(true)
      setIsLayoutIdEnabled(false) // Disable layoutId for left/right transitions
      requestAnimationFrame(() => {
        setSelectedImageIndex(
          (selectedImageIndex - 1 + images.length) % images.length
        )
      })
    }
  }

  const handleAnimationComplete = () => {
    setIsTransitioning(false)
  }

  return (
    <>
      <ButtonScroller>
        {images.map((image, index) => (
          <motion.div
            key={index}
            layoutId={isLayoutIdEnabled ? `image-${index}` : undefined} // Set layoutId only when enabled
            className={clsx(
              'group',
              'h-[300px] w-[400px]',
              'shrink-0',
              'cursor-zoom-in overflow-hidden rounded-xl border border-black/10'
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className={clsx(
                'h-[300px] w-[400px]',
                'object-cover object-top',
                'transform transition-all group-hover:scale-105'
              )}
              width={400}
              onClick={() => openPreview(index)}
            />
          </motion.div>
        ))}
      </ButtonScroller>

      {selectedImageIndex !== null && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', duration: 0.2 }}
            className={clsx(
              'fixed inset-0 z-50',
              'bg-white/40 dark:bg-depth-2',
              'backdrop-blur-xl'
            )}
          >
            <AnimatePresence
              initial={false}
              custom={transitionDirection}
              onExitComplete={handleAnimationComplete}
            >
              <motion.div
                key={selectedImageIndex}
                layoutId={
                  isLayoutIdEnabled ? `image-${selectedImageIndex}` : undefined
                } // Set layoutId only when enabled
                custom={transitionDirection}
                initial={{
                  x: transitionDirection === 'right' ? '60%' : '-60%',
                  opacity: 0
                }}
                animate={{ x: 0, opacity: 1 }}
                exit={{
                  x: transitionDirection === 'right' ? '-60%' : '60%',
                  opacity: 0
                }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="absolute flex h-full w-full cursor-zoom-out items-center justify-center p-4"
                onClick={closePreview}
              >
                <Image
                  src={images[selectedImageIndex].src}
                  alt="Current Image"
                  className="max-h-full w-auto rounded-xl drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
            <IconButton
              uid="x"
              onClick={closePreview}
              className="absolute right-2 top-2"
              aria-label="Close"
            />
            <motion.div
              className="absolute left-2 top-1/2 -translate-y-1/2 transform"
              initial={{ x: '-40px', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-40px', opacity: 0 }}
              transition={{ type: 'spring', duration: 0.8, delay: 0.4 }}
            >
              <IconButton
                uid="left-chevron"
                onClick={showPreviousImage}
                aria-label="Previous Image"
              />
            </motion.div>
            <motion.div
              className="absolute right-2 top-1/2 -translate-y-1/2 transform"
              initial={{ x: '40px', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '40px', opacity: 0 }}
              transition={{ type: 'spring', duration: 0.8, delay: 0.4 }}
            >
              <IconButton
                uid="right-chevron"
                onClick={showNextImage}
                aria-label="Next Image"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}
