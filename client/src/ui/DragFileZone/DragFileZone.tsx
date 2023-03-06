import { useLabelsContext } from '@/contexts'
import { FC } from 'react'

import styles from './DragFileZone.module.scss'

export type DragFileZoneProps = {
  onChange: (file: File) => void
}

export const DragFileZone: FC<DragFileZoneProps> = ({ onChange }) => {

  const { labels } = useLabelsContext('shared.dragZoneButton')

  const handleDrop = (event: any) => {
    event.preventDefault()
    const file = event.dataTransfer?.files[0]
    removeDragData(event)
    onChange(file)
  }

  const handleDragOver = (event: any) => event.preventDefault()

  const removeDragData = (event: any) => {
    event.dataTransfer?.items ? event.dataTransfer?.items.clear() : event.dataTransfer?.clearData()
  }

  const handleChangeImage = (event: any) => {
    const file = event.target?.files[0]
    onChange(file)
  }

  return (
    <div className={styles.dragFileZone}>
      <div className={styles.dragFileZone_container} onDrop={handleDrop} onDragOver={handleDragOver}>
        <input type="file" id="drag-file" name="drag-file" onChange={handleChangeImage} />
        <label htmlFor="drag-file" className={styles.dragFileZone_label}>{labels}</label>
      </div>
    </div>
  )
}
