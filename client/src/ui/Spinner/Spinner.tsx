import { FC } from 'react'

import styles from './Spinner.module.scss'

export type SpinnerProps = {}

export const Spinner: FC<SpinnerProps> = (props) => {
  return (
    <div className={styles.spinner} />
  )
}
