import { FC } from 'react'
import { motion } from 'framer-motion'

import { Button, ContainerSnapItem, ContainerTwoUp } from '@/ui'

import styles from './HomeRemoveBg.module.scss'

export type HomeRemoveBgProps = {}

export const HomeRemoveBg: FC<HomeRemoveBgProps> = props => {
  return (
    <ContainerSnapItem>
      <motion.div
        className={styles.homeRemoveBg}
        // initial={{ scaleY: 0, opacity: 0 }}
        // whileInView={{ scaleY: 1, opacity: 1 }}
        // transition={{ duration: 0.4 }}
      >
        <motion.h2
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Elimina el fondo de las imágenes
        </motion.h2>
        <motion.div
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 0.3, delay: 0.6 }}
        >
          <ContainerTwoUp />
        </motion.div>
        <motion.form initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Button backgroundColor="tertiary">Subir imagen</Button>
        </motion.form>
      </motion.div>
    </ContainerSnapItem>
  )
}
