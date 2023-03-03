import { FC, ReactNode, useMemo } from 'react'
import { motion } from 'framer-motion'

import { useIntersectionObserverContext } from '@/ui/IntersectionObserver'

export type ContainerScaleProps = {
  children: ReactNode
  className?: string
  delayOrder?: number // order of appearance
  duration?: number // y initial possition
  easing?: number[] // [number, number, number, number] | "linear" | "easeIn" |
  //  "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  // "backInOut" | "anticipate" | EasingFunction;
}

export const ContainerScale: FC<ContainerScaleProps> = ({
  children,
  className = '',
  delayOrder = 0,
  duration = 0.4,
  easing = [0.42, 0, 0.58, 1],
}) => {
  const { inView } = useIntersectionObserverContext()
  const transition = useMemo(
    () => ({
      duration,
      delay: delayOrder / 5,
      ease: easing,
    }),
    [duration, delayOrder, easing]
  )

  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: transition,
    },
  }

  return (
    <motion.div className={className} initial="hidden" animate={inView ? 'show' : 'hidden'} exit="hidden" variants={variants}>
      {children}
    </motion.div>
  )
}
