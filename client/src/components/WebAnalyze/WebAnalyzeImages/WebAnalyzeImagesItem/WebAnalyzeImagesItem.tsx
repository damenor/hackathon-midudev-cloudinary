import { FC } from 'react'
import { RxExternalLink } from 'react-icons/rx'
import { TbClipboard } from 'react-icons/tb'

import { Button } from '@/ui'
import { WebAnalyzeImageType } from '@/types'
import { copyToClipboard, toLinkExternal } from '@/tools'

import styles from './WebAnalyzeImagesItem.module.scss'

export type WebAnalyzeImagesItemProps = WebAnalyzeImageType & {
  isSelected: boolean
  isImprove: boolean
  onClick: () => void
}

export const WebAnalyzeImagesItem: FC<WebAnalyzeImagesItemProps> = ({ size, sizeFormatted, type, url, isSelected, isImprove, onClick }) => {
  return (
    <div className={styles.webAnalyzeImagesItem}>
      <div className={styles.webAnalyzeImagesItem_header}>
        <span>{sizeFormatted}</span>
        {/* <span>{type}</span> */}
        <div className={styles.webAnalyzeImagesItem_headerIcons}>
          <TbClipboard size={20} onClick={() => copyToClipboard(url)} />
          <RxExternalLink size={20} onClick={() => toLinkExternal(url)} />
        </div>
      </div>
      <img src={url} />
      {!isImprove ? (
        <div>
          <Button className={styles.webAnalyzeImagesItem_button} backgroundColor={isSelected ? 'success' : 'primary'} onClick={onClick}>
            {isSelected ? 'Seleccionada' : 'Seleccionar'}
          </Button>
        </div>
      ) : (
        <a className={styles.webAnalyzeImagesItem_button} download href={url} target="_blank">
          Descargar
        </a>
      )}
    </div>
  )
}
