import { FC, ReactNode } from 'react'

import styles from './ContainerSnap.module.scss'

export type ContainerSnapProps = {
  children: ReactNode
  className?: string
  classNameContent?: string
}

export const ContainerSnap: FC<ContainerSnapProps> = ({ children, className = '', classNameContent = '' }) => {
  return (
    <div className={`${styles.containerSnap} ${className}`}>
      <div className={`${styles.containerSnap_content} ${classNameContent}`}>{children}</div>
    </div>
  )
}
