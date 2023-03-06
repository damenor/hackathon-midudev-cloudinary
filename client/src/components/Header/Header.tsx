import { FC } from 'react'
import { Link } from 'react-router-dom'

import { useLabelsContext } from '@/contexts'
import { i18nOptions } from '@/i18n'
import { DropDownMenu } from '@/ui'

import styles from './Header.module.scss'
// import { HeaderMenu } from './HeaderMenu'

export const Header: FC = () => {
  
  const { changeLanguage, languageSelected } = useLabelsContext()

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>

        <div className={styles.header_left}>
          {/* <HeaderMenu /> */}
        </div>

        <Link to="/">
          <img src="/logo.svg" alt="logo" className={styles.header_logo} />
        </Link>

        <div className={styles.header_right}>
          <DropDownMenu 
            items={i18nOptions()} 
            initialSelected={i18nOptions().find(lang => lang.value === languageSelected)}
            onChange={(item) => changeLanguage(item.value as any)} 
          />
        </div>

      </div>
    </header>
  )
}
