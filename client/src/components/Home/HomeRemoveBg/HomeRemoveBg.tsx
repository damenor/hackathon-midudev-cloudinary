import { FC } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { ContainerSnapItem, ContainerTwoUp, DragFileZone } from '@/ui'
import { removeBgPageRoute } from '@/pages'

import styles from './HomeRemoveBg.module.scss'
import { useLabelsContext } from '@/contexts'

export type HomeRemoveBgProps = {}

export const DragZone = () => {}

export const HomeRemoveBg: FC<HomeRemoveBgProps> = props => {
  const navigate = useNavigate()
  const { labels } = useLabelsContext('removeBg.title')

  const onChangeImage = (file: File) => {
    navigate(removeBgPageRoute.path, { state: { file } })
  }

  return (
    <ContainerSnapItem>
      <div className={styles.homeRemoveBg}>
        <motion.h2
          className={styles.homeRemoveBg_title}
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {labels}
        </motion.h2>

        <div className={styles.homeRemoveBg_content}>
          <ContainerTwoUp
            leftImage="https://sb.kaleidousercontent.com/67418/992x558/38748c9193/products-stunning-quality-v2.jpg"
            rightImage="https://sb.kaleidousercontent.com/67418/992x558/a45eaf1df9/products-stunning-quality-transp.png"
          />
          <DragFileZone onChange={onChangeImage} />
        </div>
      </div>
    </ContainerSnapItem>
  )
}
