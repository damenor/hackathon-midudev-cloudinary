// https://commons.wikimedia.org/wiki/File:VWO-Logo.svg
// https://github.com/junkboy0315/react-compare-image
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

import { Header, HomeHero, HomeRemoveBg } from '@/components'
import { ContainerFadeInUp, ContainerSnap, ContainerSnapItem, IntersectionObserver, ContainerScale, ContainerTwoUp, Button } from './ui'

export const App = () => {
  // const containerRef = useRef<any>()

  // useEffect(() => {
  //   const onScroll = (e: any) => {
  //     if (e.deltaY > 0) {
  //       containerRef.current.scrollLeft += window.innerWidth
  //     } else {
  //       containerRef.current.scrollLeft -= window.innerWidth
  //     }
  //   }
  //   containerRef.current?.addEventListener('wheel', onScroll)

  //   return () => {
  //     containerRef.current.removeEventListener('wheel', onScroll)
  //   }
  // }, [])

  return (
    <>
      <Header />
      {/* <main ref={containerRef}></main> */}
      <ContainerSnap>
        <HomeHero />

        <HomeRemoveBg />

        <ContainerSnapItem>
          Helo World
        </ContainerSnapItem>
      </ContainerSnap>

      <div className="dots">
        <div className="dots_item"></div>
        <div className="dots_item active"></div>
        <div className="dots_item"></div>
      </div>

    </>
  )
}
