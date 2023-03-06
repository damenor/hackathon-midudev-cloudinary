import { FC } from 'react'
import { motion } from 'framer-motion'

import { getClassName } from '@/styles'

import styles from './DropDownMenu.module.scss'

export type DropDownMenuItemType = {
  label: string
  value: string | number 
}

export type DropDownMenuItemProps = DropDownMenuItemType & { 
  isActive: boolean
  onClick: () => void
}

export const DropDownMenuItem: FC<DropDownMenuItemProps> = ({ label, value, isActive, onClick }) => {

  const classNameLabel = getClassName({
    styles,
    parent: 'dropDownMenu_itemLabel',
    variants: {
      active: isActive
    }
  })

  return (
    <div className={styles.dropDownMenu_item} onClick={onClick}>
      { isActive && <motion.div className={styles.dropDownMenu_item__active} layoutId="dropDownMenu_item__select" /> }
      <span className={classNameLabel}>{ label }</span>
    </div>
  )
}
