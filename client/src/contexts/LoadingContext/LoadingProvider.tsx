import { FC, ReactNode, useRef, useState } from 'react'

import { ModalLoading } from '@/components'
import { ModalHandle } from '@/ui'

import { LoadingContext, LOADING_CONTEXT_INITIAL } from './LoadingContext'

export type LoadingProviderProps = {
  children: ReactNode
}

export const LoadingProvider: FC<LoadingProviderProps> = ({ children }) => {

  const [text, setText] = useState<string>()
  const modalRef = useRef<ModalHandle>()

  const showLoading = (text?: string) => {
    if(text) setText(text)
    modalRef.current?.open()
  }
  const hideLoading = () => {
    setText(undefined)
    modalRef.current?.close()
  }
  const toggleLoading = () => modalRef.current?.visible ? modalRef.current?.close() : modalRef.current?.open()

  const value: typeof LOADING_CONTEXT_INITIAL = {
    isVisible: modalRef.current?.visible || false,
    showLoading,
    hideLoading,
    toggleLoading,
    text
  }

  return (
    <LoadingContext.Provider value={value}>
      { children }
      <ModalLoading ref={modalRef as any} />
    </LoadingContext.Provider>
  )
}
