import { createContext, useContext } from 'react'

export const LOADING_CONTEXT_INITIAL = {
  isVisible: true,
  showLoading: (text?: string) => {},
  hideLoading: () => {},
  toggleLoading: () => {},
  text: undefined as string | undefined
}

export const LoadingContext = createContext(LOADING_CONTEXT_INITIAL)

export const useLoadingContext = () => {
  const context = useContext(LoadingContext)
  if(!context) throw new Error('useLoadingContext - LoadingProvider not implemented')
  return context
}
