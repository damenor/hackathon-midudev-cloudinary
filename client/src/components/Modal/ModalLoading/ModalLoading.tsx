import { forwardRef, ForwardRefRenderFunction } from 'react'

import { useLoadingContext } from '@/contexts'
import { Modal, ModalHandle, Spinner } from '@/ui'

import styles from './ModalLoading.module.scss'

export type ModalLoadingProps = {}

export const ModalLoadingComponent: ForwardRefRenderFunction<ModalHandle, ModalLoadingProps> = ({}, ref) => {

  const { text } = useLoadingContext()

  return (
    <Modal ref={ref as any} notCloseBackdrop>
      <div className={styles.modalLoading}>
        <Spinner />
        {text && <h2 className={styles.modalLoading_text}>{text}</h2>}
      </div>
    </Modal>
  )
}

ModalLoadingComponent.displayName = 'ModalLoading'
export const ModalLoading = forwardRef(ModalLoadingComponent)
