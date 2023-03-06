import { FC } from 'react'

import { HomeHero, HomeRemoveBg, RoutePage } from '@/components'
import { ContainerSnap } from '@/ui'

export const HomePage: FC = () => {
  return (
    <ContainerSnap>
      <HomeHero />
      <HomeRemoveBg />
    </ContainerSnap>
  )
}

export const homePageRoute: RoutePage = {
  label: 'home.title',
  path: '/',
  element: <HomePage />,
}
