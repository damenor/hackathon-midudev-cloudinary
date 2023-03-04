import { FC, useRef, useState } from 'react'
import { CgMenuLeft, CgSun, CgMoon } from 'react-icons/cg'
import { TbLanguage } from 'react-icons/tb'
import { motion } from 'framer-motion'

import { ButtonIcon, Modal, ModalHandle } from '@/ui'

import styles from './Header.module.scss'

export type HeaderProps = {}

export const Header: FC<HeaderProps> = props => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const modalRef = useRef<ModalHandle>()

  const toggleTheme = () => setIsDarkMode(prevState => !prevState)

  const handleOnClick = () => modalRef.current?.open()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_content}>

          <div className={styles.header_left}>
            <ButtonIcon Icon={CgMenuLeft} onClick={handleOnClick} />
          </div>

          <img src="/logo.svg" alt="logo" className={styles.header_logo} />

          <div className={styles.header_right}>
            {/* <div>EN</div> */}
            <ButtonIcon Icon={TbLanguage} onClick={toggleTheme} />
          </div>

        </div>
      </header>
      <Modal className={styles.header_menu} ref={modalRef as any} type="left">
        
      </Modal>
    </>
  )
}
