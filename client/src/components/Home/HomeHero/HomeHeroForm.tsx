import { FC, FormEvent, useRef } from 'react'
import { motion } from 'framer-motion'

import { Button, Modal, ModalHandle } from '@/ui'

import styles from './HomeHero.module.scss'

export type HomeHeroFormProps = {}

export const HomeHeroForm: FC<HomeHeroFormProps> = props => {

  const modalRef = useRef<ModalHandle>()

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    modalRef.current?.open()

    setTimeout(() => modalRef.current?.close(), 3000)
  }

  return (
    <>
      <motion.div
        className={styles.homeHero_form}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2>Mejora las imágenes de tu web para optimizar el rendimiento</motion.h2>
        <form onSubmit={onSubmit}>
          <input type="url" placeholder="Indica tu dirección web" />
          <Button backgroundColor="primary" type="submit">
            Analizar
          </Button>
        </form>
      </motion.div>
      <Modal ref={modalRef as any} notCloseBackdrop>
        <div
          style={{
            minWidth: '280px',
            maxWidth: '450px',
            display: 'grid',
            placeItems: 'center',
            gap: '16px',
            backgroundColor: 'var(--color-bg)',
            padding: '32px',
            borderRadius: '32px',
          }}
        >
          <div className="loader"></div>
          {/* <h2 style={{ fontSize: 'clamp(1.25rem, 5vw, 2rem)', textAlign: 'center' }}>
            Enviámos a nuestros mejores expertos analizar la web, espere unos segundos
          </h2> */}
        </div>
      </Modal>
    </>
  )
}
