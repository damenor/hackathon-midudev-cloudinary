import { AnimatePresence, motion } from 'framer-motion'
import { FC, useState } from 'react'
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs'

import { useOnClickOutside } from '@/hooks'

import styles from './DropDownMenu.module.scss'
import { DropDownMenuItem, DropDownMenuItemType } from './DropDownMenuItem'

export type DropDownMenuProps = {
  items: DropDownMenuItemType[]
  onChange: (item: DropDownMenuItemType) => void
  initialSelected?: DropDownMenuItemType
}

export const DropDownMenu: FC<DropDownMenuProps> = ({ items, initialSelected, onChange }) => {
  const [selected, setSelected] = useState<DropDownMenuItemType>(initialSelected || items[0])
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => setIsOpen(prevState => !prevState)
  const close = () => setIsOpen(false)

  const { ref } = useOnClickOutside({ handler: close })

  const onClickItem = (item: DropDownMenuItemType) => {
    setSelected(item)
    onChange(item)
    close()
  }

  return (
    <div className={styles.dropDownMenu} ref={ref}>
      <div className={styles.dropDownMenu_selected} onClick={toggleIsOpen}>
        <div>{selected.label}</div>
        { isOpen ? <BsCaretUpFill /> : <BsCaretDownFill /> }
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className={styles.dropDownMenu_content}
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -10 }}
            transition={{ type: 'spring' }}
          >
            {items.map(item => (
              <DropDownMenuItem
                key={item.value.toString()}
                {...item}
                isActive={item.value === selected.value}
                onClick={() => onClickItem(item)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
