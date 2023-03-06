import de from './de'
import en from './en'
import es from './es'
import fr from './fr'
import it from './it'

export type I18nType = keyof typeof i18n
export type I18nLabels = typeof i18n['es']['labels']

export const i18n = { de, en, es, fr, it }
export const i18nOptions = () => Object.keys(i18n).map((key) => ({ label: i18n[key as I18nType].language, value: key }))
