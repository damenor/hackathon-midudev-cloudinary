import { createContext, useContext } from 'react'

import { i18n, I18nLabels, I18nType } from '@/i18n'

type GetLabelsByStringArgs = {
  labels: I18nLabels
  label: string
}

const getLabelsByString = ({ labels, label }: GetLabelsByStringArgs) => {
  const labelsState: any = labels
  const splits = label.split('.')
  let labelsTemp: any = null
  splits.forEach(split => labelsTemp = labelsTemp ? labelsTemp[split] : labelsState[split])
  return labelsTemp
}

export const LabelsContext = createContext({
  ...i18n['es'],
  languageSelected: 'es' as I18nType,
  changeLanguage: (languageType: I18nType) => {}
})

export const useLabelsContext = (label?: string) => {
  const context = useContext(LabelsContext)
  if(!context) throw new Error('useLabelsContext - LabelsContext not implemented')
  if(!label) return context
  return { ...context, labels: getLabelsByString({ labels: context.labels, label }) }
}
