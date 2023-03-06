import { useRef } from 'react'
import { ModalHandle } from './Modal.types'

export const useModal = () => {
  const modalRef = useRef<ModalHandle>()
  return { modalRef, ...modalRef.current as ModalHandle }
}
