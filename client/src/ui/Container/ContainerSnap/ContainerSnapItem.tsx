import { FC, ReactNode } from 'react'

import styles from './ContainerSnap.module.scss'

export type ContainerSnapItemProps = {
  children: ReactNode
  className?: string
  classNameContent?: string
}

export const ContainerSnapItem: FC<ContainerSnapItemProps> = ({ children, className = '', classNameContent = '' }) => {
  return (
    <div className={`${styles.containerSnapItem} ${className}`}>
      <div className={`${styles.containerSnapItem_content} ${classNameContent}`}>{children}</div>
    </div>
  )
}
