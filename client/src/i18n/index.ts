import { en } from './en'
import { es } from './es'

export type I18nType = keyof typeof i18n
export type I18nLabels = typeof i18n['es']['labels']

export const i18n = {
  en,
  es,
}
export const i18nOptions = () => Object.keys(i18n).map(key => ({ label: i18n[key as I18nType].language, value: key }))
