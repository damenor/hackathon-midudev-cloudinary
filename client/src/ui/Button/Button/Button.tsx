import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { ColorsType } from '@/types'

import styles from './Button.module.scss'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  backgroundColor?: ColorsType
  color?: ColorsType
}

export const Button: FC<ButtonProps> = ({ children, backgroundColor = 'tertiary', color = 'tertiary-contrast', ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      style={{
        backgroundColor: `var(--color-${backgroundColor})`,
        color: `var(--color-${color})`,
      }}
      className={`${styles.button} ${buttonProps.className || ''}`}
    >
      {children}
    </button>
  )
}
