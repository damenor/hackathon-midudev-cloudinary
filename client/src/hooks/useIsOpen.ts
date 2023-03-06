import { useState } from 'react'

export type UseIsOpenArgs = {
  initialState?: boolean
}

export const useIsOpen = ({ initialState = false }: UseIsOpenArgs = {}) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const toggle = () => setIsOpen(prevState => !prevState)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return { isOpen, toggle, open, close }

}