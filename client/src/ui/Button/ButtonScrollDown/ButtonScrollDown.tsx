import { FC } from 'react'
import { motion } from 'framer-motion'

import styles from './ButtonScrollDown.module.scss'

export type ButtonScrollDownProps = {}

export const ButtonScrollDown: FC<ButtonScrollDownProps> = props => {
  return (
    <motion.button className={styles.buttonScrollDown}>
      <motion.div
        className={styles.buttonScrollDown_scroll}
        animate={{ translateY: [-2.5, 2.5, -2.5] }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      />
    </motion.button>
  )
}
