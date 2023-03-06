import { FC, ReactNode, useState } from 'react'

import { i18n, I18nType } from '@/i18n'

import { LabelsContext } from './LabelsContext'
import { getLocalStorage, setLocalStorage } from '@/tools'
import { LOCALSTORAGE_LANGUAGE } from '@/constants'

export type LabelsProviderProps = {
  children: ReactNode
}

export const LabelsProvider: FC<LabelsProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<I18nType>(() => getLocalStorage(LOCALSTORAGE_LANGUAGE) || 'es')
  const changeLanguage = (languageType: I18nType) => {
    setLanguage(languageType)
    setLocalStorage(LOCALSTORAGE_LANGUAGE, languageType)
  }
  const value = {
    ...i18n[language],
    languageSelected: language,
    changeLanguage
  }
  return <LabelsContext.Provider value={value}>{children}</LabelsContext.Provider>
}
