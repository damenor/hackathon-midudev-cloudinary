import { ButtonHTMLAttributes, FC } from 'react'
import { IconType } from 'react-icons'

import styles from './ButtonIcon.module.scss'

export type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: IconType
  className?: string
  iconSize?: number
}

export const ButtonIcon: FC<ButtonIconProps> = ({ Icon, className, iconSize = 28, ...buttonProps }) => {
  return (
    <button className={`${styles.buttonIcon} ${className}`} {...buttonProps}>
      <Icon size={iconSize} color="var(--color-bg-contrast)" />
    </button>
  )
}
