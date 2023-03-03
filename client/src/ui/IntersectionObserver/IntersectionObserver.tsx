import React, { FC, ReactNode, useContext, useEffect, useState } from 'react'
import { useIntersectionObserver } from '@/hooks'

export type IntersectionObserverProps = {
  children: ReactNode
  className?: string
  reset?: boolean
}

export const IntersectionObserverContext = React.createContext({ inView: true })

export const IntersectionObserver: FC<IntersectionObserverProps> = ({ children, className = '', reset = false }) => {
  const [inView, setInView] = useState(false)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersectionObserver(intersectionRef, { threshold: 0 })

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0
    if (inViewNow) {
      return setInView(inViewNow)
    } else if (reset) {
      return setInView(false)
    }
  }, [intersection, reset])

  return (
    <IntersectionObserverContext.Provider value={{ inView }}>
      <div className={className} ref={intersectionRef}>{children}</div>
    </IntersectionObserverContext.Provider>
  )
}

export const useIntersectionObserverContext = () => useContext(IntersectionObserverContext)
