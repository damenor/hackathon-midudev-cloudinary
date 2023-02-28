// https://commons.wikimedia.org/wiki/File:VWO-Logo.svg

import { FormEvent, useState } from 'react'

import { Logo } from '@/components'

const getImagesFromWeb = async (webUrl: string) => {
  const response = await fetch(`http://localhost:5000/web?url=${webUrl}`)
  return await response.json()
}

function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export const App = () => {
  const [webUrl, setWebUrl] = useState<string>()
  const [images, setImages] = useState<any>([])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setImages([])
    event.preventDefault()
    if (!webUrl) return
    const response = await getImagesFromWeb(webUrl)

    const images = await response.images.map(async (url: string) => {
      // const { size, type, text, slice } = await fetch(url).then(async r => await r.blob())
      const response = await fetch(url)
      // const buffer = await response.arrayBuffer()
      // console.log({ buffer })
      const { size, type } = await response.blob()
      return { size, sizeFormatted: formatBytes(size), type, url }
    })
    const img = await Promise.all(images)
    console.log({ img })
    setImages(img)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px' }}>
      <div style={{ maxWidth: '650px', width: '100%' }}>
        <img src="/logo.svg" alt="logo" style={{ width: '100%' }} />
        {/* <Logo /> */}
        <h1 style={{ fontSize: '1.5rem', paddingTop: '8px', textAlign: 'center' }}>Visual Web Optimizer</h1>
      </div>

      {/* {  webUrl && <iframe src={webUrl} /> } */}
      <form
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '32px auto', width: '100%', maxWidth: '960px' }}
        onSubmit={onSubmit}
      >
        <input placeholder="Inserta la dirección de tu web" type="url" onChange={e => setWebUrl(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {images
        .filter((img: any) => img.type.includes('image/'))
        .map((image: any) => (
          <div>
            <span>{image.sizeFormatted}</span>
            <span>{image.type.replace('image/', '')}</span>
            <img width="80px" src={image.url} />
          </div>
        ))}
    </div>
  )
}
