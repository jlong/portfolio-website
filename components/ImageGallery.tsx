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
  }

  const closePreview = () => {
    setSelectedImageIndex(null)
    setIsPreviewOpen(false)
  }

  const showNextImage = () => {
    if (selectedImageIndex !== null && !isTransitioning) {
      setTransitionDirection('right')
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedImageIndex((selectedImageIndex + 1) % images.length)
      }, 0)
    }
  }

  const showPreviousImage = () => {
    if (selectedImageIndex !== null && !isTransitioning) {
      setTransitionDirection('left')
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedImageIndex(
          (selectedImageIndex - 1 + images.length) % images.length
        )
      }, 0)
    }
  }

  const handleAnimationComplete = () => {
    setIsTransitioning(false)
  }

  return (
    <>
      <ButtonScroller>
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx(
              'group',
              'h-[300px] w-[400px]',
              'shrink-0',
              'border-border-light cursor-pointer overflow-hidden rounded-2xl border bg-depth-2'
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className={clsx(
                'h-[300px] w-[400px]',
                'object-cover object-top',
                'transform transition-all group-hover:scale-105 group-hover:opacity-50'
              )}
              width={400}
              onClick={() => openPreview(index)}
            />
          </div>
        ))}
      </ButtonScroller>

      {selectedImageIndex !== null && (
        <div
          className={clsx('fixed inset-0 z-50', 'bg-white/40 backdrop-blur-xl')}
        >
          <div className={clsx('relative h-full w-full', 'overflow-hidden')}>
            <AnimatePresence
              initial={false}
              custom={transitionDirection}
              onExitComplete={handleAnimationComplete}
            >
              <motion.div
                key={selectedImageIndex}
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
                className="absolute flex h-full w-full items-center justify-center p-4"
              >
                <Image
                  src={images[selectedImageIndex].src}
                  alt="Current Image"
                  className="max-h-full w-auto shadow-2xl ring-1 ring-black/10"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <IconButton
            uid="x"
            onClick={closePreview}
            className="absolute right-2 top-2"
            aria-label="Close"
          />
          <IconButton
            uid="left-arrow"
            onClick={showPreviousImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 transform"
            aria-label="Previous Image"
          />
          <IconButton
            uid="right-arrow"
            onClick={showNextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 transform"
            aria-label="Next Image"
          />
        </div>
      )}
    </>
  )
}
