import { FC, useState } from 'react'
import { CgMenuLeft, CgSun, CgMoon } from 'react-icons/cg'

import styles from './Header.module.scss'

export type HeaderProps = {}

export const Header: FC<HeaderProps> = props => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => setIsDarkMode(prevState => !prevState)

  return (
    <header className={styles.header}>

      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <div className={styles.header_link}>
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
          {isDarkMode ? <CgSun size={24} color="var(--color-bg-contrast)" /> : <CgMoon size={24} color="var(--color-bg-contrast)" />}
        </div>
      </div>

    </header>
  )
}
