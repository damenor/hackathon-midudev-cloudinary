import { CSSProperties, FC } from 'react'
import { motion } from 'framer-motion'

import { FramerMotionAnimationProps } from '@/types'

export type HomeHeroImgProps = FramerMotionAnimationProps & {
  src: string
  style?: CSSProperties
}

export const HomeHeroImg: FC<HomeHeroImgProps> = ({ src, ...framerMotionsAnimations }) => {
  return <motion.img {...framerMotionsAnimations} src={src} />
}
