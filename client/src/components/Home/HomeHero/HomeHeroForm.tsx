import { FC, FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { createSearchParams, useNavigate } from 'react-router-dom'

import { Button } from '@/ui'
import { webAnalyzePageRoute } from '@/pages'
import { isValidUrl } from '@/tools'
import { useLabelsContext } from '@/contexts'

import styles from './HomeHero.module.scss'

export type HomeHeroFormProps = {}

export const HomeHeroForm: FC<HomeHeroFormProps> = props => {
  const [webUrl, setWebUrl] = useState('')
  const { labels } = useLabelsContext('home.homeHero')
  
  const navigate = useNavigate()

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(!webUrl || !isValidUrl(webUrl)) return
    navigate({
      pathname: webAnalyzePageRoute.path,
      search: createSearchParams({ webUrl }).toString()
    })
  }

  return (
    <>
      <motion.div
        className={styles.homeHero_form}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2>{labels.title}</motion.h2>
        <form onSubmit={handleOnSubmit}>
          <input type="url" placeholder={labels.inputPlaceholder} onChange={e => setWebUrl(e.target.value)} />
          <Button backgroundColor="primary" type="submit">
          {labels.button}
          </Button>
        </form>
      </motion.div>
    </>
  )
}
