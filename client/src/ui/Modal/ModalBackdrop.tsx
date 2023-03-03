import { FC } from 'react'
import { motion, Variants } from 'framer-motion'

import styles from './Modal.module.scss'

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

export type ModalBackdropProps = {
  onClose: () => void
  notCloseBackdrop?: boolean
}

export const ModalBackdrop: FC<ModalBackdropProps> = ({ onClose, notCloseBackdrop }) => {
  return (
    <motion.div 
      className={styles.modal_backdrop} 
      onClick={() => !notCloseBackdrop && onClose()} 
      variants={fadeIn} 
      initial="hidden" 
      animate="visible" 
      exit="exit" 
    />
  )
}
