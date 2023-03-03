import { CSSProperties, FC } from 'react'
import { motion } from 'framer-motion'

import { FramerMotionAnimationProps } from '@/types'

export type HomeHeroImgProps = FramerMotionAnimationProps & {
  src: string
  style?: CSSProperties
}

export const HomeHeroImg: FC<HomeHeroImgProps> = ({ src, ...framerMotionsAnimations }) => {
  return (
    // <motion.div
    //   { ...framerMotionsAnimations }
    //   // initial={{ opacity: 0, scale: 0 }}
    //   // animate={{ opacity: 1, scale: 1 }}
    //   // transition={{ delay: 2, type: 'spring', stiffness: 50 }}
    // >
    // </motion.div>
      <motion.img { ...framerMotionsAnimations } src={src} />
  )
}
