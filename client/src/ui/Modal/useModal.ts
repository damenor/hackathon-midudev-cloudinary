import { useRef } from 'react'
import { ModalHandle } from './Modal.types'

export const useModal = () => {
  const modalRef = useRef<ModalHandle>()
  console.log({ modalRef })
  return { modalRef, ...modalRef.current as ModalHandle }
}
