import { FC, useRef, useState } from 'react'
import { CgMenuLeft, CgSun, CgMoon } from 'react-icons/cg'
import { TbLanguage } from 'react-icons/tb'
import { motion } from 'framer-motion'

import { Modal, ModalHandle } from '@/ui'

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
          <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <div className={styles.header_link} onClick={handleOnClick}>
              <CgMenuLeft size={28} color="var(--color-bg-contrast)" />
            </div>
            {/* <ul>
            <li>Eliminar fondo</li>
            <li>Analizar web</li>
          </ul> */}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <h1 style={{ fontSize: '0.8rem', paddingBottom: '8px', textAlign: 'center', fontWeight: 'bold' }}>Visual Web Optimizer</h1> */}
            <img src="/logo.svg" alt="logo" style={{ width: '100px' }} />
            {/* <Logo /> */}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
            {/* <div>EN</div> */}
            <div className={styles.header_link} onClick={toggleTheme}>
              {isDarkMode ? <TbLanguage size={24} color="var(--color-bg-contrast)" /> : <TbLanguage size={24} color="var(--color-bg-contrast)" />}
            </div>
          </div>
        </div>
      </header>
      <Modal className={styles.header_menu} ref={modalRef as any} type="left">
        
      </Modal>
    </>
  )
}
