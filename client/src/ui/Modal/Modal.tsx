import { forwardRef, ForwardRefRenderFunction, useImperativeHandle, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './Modal.module.scss'
import { ModalHandle, ModalProps } from './Modal.types'
import { ModalBackdrop } from './ModalBackdrop'
import * as modalVariants from './modalVariants'

export const ModalComponent: ForwardRefRenderFunction<ModalHandle, ModalProps> = ({ 
  children, 
  onClose, 
  onOpen, 
  className = '',
  notCloseBackdrop,
  type = 'center' 
}, ref) => {
  const [visible, setVisible] = useState(false)

  const close = () => {
    if (onClose) onClose()
    setVisible(false)
  }
  const open = () => {
    if (onOpen) onOpen()
    setVisible(true)
  }

  useImperativeHandle(ref, () => ({ visible, open, close }))

  return (
    <AnimatePresence initial={visible} mode="wait">
      {visible && (
        <>
          <ModalBackdrop notCloseBackdrop={notCloseBackdrop} onClose={close} />
          <motion.div className={styles.modal} variants={modalVariants[type]} initial="hidden" animate="visible" exit="exit">
            <motion.div
              className={className}
              drag="x"
              dragConstraints={{ right: 0, left: 0 }}
              whileTap={{ cursor: 'grabbing' }}
              dragElastic={0.25}
              onDragEnd={(_, info) => info.offset.x < -150 && close()}
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
ModalComponent.displayName = 'Modal'
export const Modal = forwardRef(ModalComponent)
