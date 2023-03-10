import { FC } from 'react'
import { motion } from 'framer-motion'

export type LogoProps = {}

export const Logo: FC<LogoProps> = props => {
  return (
    <motion.svg style={{ width: '100%' }} viewBox="0 0 279 96" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        strokeWidth={4}
        strokeDasharray="0 1"
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 1,
        }}
        d="m229.76 0c27.19 0 49.24 21.49 49.24 48 0 26.51-22.04 48-49.24 48-22.903 0-42.15-15.245-47.656-35.895l4.365 2.763 2.264-3.398c5.108 17.397 21.543 30.13 41.03 30.13 23.566 0 42.671-18.625 42.671-41.6 0-22.975-19.1-41.6-42.671-41.6-2.02 0-4 .136-5.944.4l4.126-6.195-.847-.536c.882-.046 1.771-.069 2.664-.069"
        fill="#55efc4"
      />
      <motion.path
        d="m180.53 0h49.24l-65.65 96-24.618-36-24.618 36-24.895-36.406 3.893-5.845 21 30.713 19.16-28.01 5.462-7.988 5.462 7.988 19.16 28.01 53.38-78.06h-36.969-55.11l4.263-6.4h50.845"
        fill="#E96479"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        strokeWidth={4}
        strokeDasharray="0 1"
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 1,
        }}
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        strokeWidth={4}
        strokeDasharray="0 1"
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 1,
        }}
        d="m65.65 96l-65.65-96h131.29l-65.65 96m0-11.538l53.38-78.06h-106.76l53.38 78.06"
        fill="#a29bfe"
      />
    </motion.svg>
  )
}
