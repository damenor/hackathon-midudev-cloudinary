// https://commons.wikimedia.org/wiki/File:VWO-Logo.svg
// https://github.com/junkboy0315/react-compare-image
import { Cloudinary } from '@cloudinary/url-gen'
import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect'

import { Header, Router } from '@/components'
import { appPages } from '@/pages'
import { LabelsProvider, LoadingProvider } from './contexts'

// const cloudinary = new Cloudinary({
//   cloud: {
//     // cloudName: 'drd6zj0ws'
//     cloudName: 'dgg07ocbn',
//   },
//   url: { secure: true }
// })

export const App = () => {

  // useEffect(() => {
  //   const getClipboardData = async (event: KeyboardEvent) => {
  //     console.log('HELLO', { event }, event.code !== 'KeyV' || !event.ctrlKey)
  //     if(event.code !== 'KeyV' || !event.ctrlKey) return 

  //     const data = await navigator.clipboard.readText()
  //     console.log('HELLO', { data })
  //   }
  //   document.addEventListener('keydown', getClipboardData)
  //   return () => {
  //     document.removeEventListener('keydown', getClipboardData)
  //   }
  // }, [])

    // const imageWithoutBackground = cloudinary.image('landing/me_mjun2q').effect(backgroundRemoval())
  // const myImage = imageWithoutBackground.toURL()
  // const image = cloudinary.image('cld-sample')

  return (
    <LabelsProvider>
      <LoadingProvider>
        <Router 
          childrenHeader={<Header />}
          pages={appPages} 
        />
      </LoadingProvider>
    </LabelsProvider>
  )
}
