import { FC } from 'react'
import { NavLink  } from 'react-router-dom'

import { RoutePage } from '@/components/Router'
import { useLabelsContext } from '@/contexts'

import styles from './HeaderMenu.module.scss'

export type HeaderMenuLinkProps = RoutePage & {
  onClick: () => void
}

export const HeaderMenuLink: FC<HeaderMenuLinkProps> = ({ path, label, onClick }) => {
  const { labels } = useLabelsContext(label)
  return (
    <NavLink 
      className={({ isActive }) => {
        if (isActive) return `${styles.headerMenu_link} ${styles.headerMenu_link__active}`
        return styles.headerMenu_link
      }} 
      to={path} 
      onClick={onClick}
    >
      {labels}
    </NavLink>
  )
}
