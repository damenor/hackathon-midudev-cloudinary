import { FC } from 'react'

import { ButtonScrollDown, ContainerSnapItem } from '@/ui'

import styles from './HomeHero.module.scss'
import { HomeHeroImg } from './HomeHeroImg'
import { HomeHeroForm } from './HomeHeroForm'

export const HomeHero: FC = () => {
  return (
    <ContainerSnapItem className={styles.homeHero} classNameContent={styles.homeHero_content}>
      <div className={styles.homeHero_imgTop}>
        <HomeHeroImg
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          src="https://images.unsplash.com/photo-1677591492408-b6fb9c630aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <HomeHeroImg
          initial={{ translateY: -100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          src="/images/kyra.jpg"
        />
        <HomeHeroImg
          initial={{ translateX: 100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          src="/images/noah.jpg"
        />
        <HomeHeroImg
          initial={{ translateY: 150, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1677607633013-b733166ab535?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <HomeHeroImg
          initial={{ scale: 0, opacity: 0, translateY: 50 }}
          whileInView={{ scale: 1, opacity: 1, translateY: 50 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2V2aWxsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>

      <HomeHeroForm />

      <ButtonScrollDown />
    </ContainerSnapItem>
  )
}
