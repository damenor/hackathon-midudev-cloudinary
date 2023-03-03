import { useMemo, useState, useEffect, ReactNode, FC } from 'react'
import { motion } from 'framer-motion'

import { useIntersectionObserverContext } from '@/ui/IntersectionObserver'

export type ContainerFadeInUpProps = {
  children: ReactNode
  className?: string
  delayOrder?: number // order of appearance
  yOffset?: number // y initial possition
  easing?: number[] // [number, number, number, number] | "linear" | "easeIn" |
  //  "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  // "backInOut" | "anticipate" | EasingFunction;
}

export const ContainerFadeInUp: FC<ContainerFadeInUpProps> = ({
  children,
  className = '',
  yOffset = 24,
  easing = [0.42, 0, 0.58, 1],
  delayOrder = 0,
}) => {
  const { inView } = useIntersectionObserverContext()
  const [delay, setDelay] = useState(0.25)

  const offset = 0.4

  useEffect(() => {
    if (delayOrder) return setDelay(delayOrder * offset)
  }, [delayOrder, offset])

  const transition = useMemo(
    () => ({
      duration: 0.4,
      delay,
      ease: easing,
    }),
    [delay, easing]
  )

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  }

  return (
    <motion.div className={className} initial="hidden" animate={inView ? 'show' : 'hidden'} exit="hidden" variants={variants}>
      {children} {inView}
    </motion.div>
  )
}
