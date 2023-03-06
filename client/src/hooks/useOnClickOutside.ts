import { RefObject, useEffect, useRef } from 'react'

type Handler = (event: MouseEvent) => void

type UseOnClickOutside<T> = {
  handler: Handler
  mouseEvent?: 'mousedown' | 'mouseup'
}

export const useOnClickOutside = <T>({ handler, mouseEvent = 'mousedown' }: UseOnClickOutside<T>) => {
  const ref = useRef<any>()
  useEffect(() => {
    const onMouseEvent = (event: MouseEvent) => {
      const element: any = ref?.current
      if (!element || element?.contains(event.target as Node)) return
      handler(event)
    }
    document.addEventListener(mouseEvent, onMouseEvent)
    return () => {
      document.removeEventListener(mouseEvent, onMouseEvent)
    }
  }, [ref, handler, mouseEvent])
  return { ref }
}
