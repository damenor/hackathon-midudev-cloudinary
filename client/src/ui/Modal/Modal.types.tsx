import { ReactNode } from 'react'

import * as modalVariants from './modalVariants'

export type ModalPosition = keyof typeof modalVariants

export type ModalProps = {
  children: ReactNode
  className?: string
  classNameParent?: string
  notCloseBackdrop?: boolean
  type?: ModalPosition
  onClose?: () => void
  onOpen?: () => void
}

export type ModalHandle = {
  visible: boolean
  open: () => void
  close: () => void
}

