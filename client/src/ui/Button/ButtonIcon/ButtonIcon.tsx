import { ButtonHTMLAttributes, FC } from 'react'
import { IconType } from 'react-icons'

import styles from './ButtonIcon.module.scss'

export type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: IconType
  className?: string
}

export const ButtonIcon: FC<ButtonIconProps> = ({ Icon, className }) => {
  return (
    <button className={`${styles.buttonIcon} ${className}`}>
      <Icon size={28} color="var(--color-bg-contrast)" />
    </button>
  )
}
