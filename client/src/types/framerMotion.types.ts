import { RefObject } from 'react'
import { AnimationProps, TargetAndTransition, VariantLabels } from 'framer-motion'

export type FramerMotionAnimationProps = AnimationProps & {
  whileInView?: VariantLabels | TargetAndTransition;
  onViewportEnter?: (entry: IntersectionObserverEntry | null) => void
  onViewportLeave?: (entry: IntersectionObserverEntry | null) => void
  viewport?: {
    root?: RefObject<Element>;
    once?: boolean;
    margin?: string;
    amount?: "some" | "all" | number;
  }
}
