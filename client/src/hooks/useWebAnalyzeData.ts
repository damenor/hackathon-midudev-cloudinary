import { useState } from 'react'

import { toFormatBytes } from '@/tools'

const getImagesFromWeb = async (webUrl: string) => {
  const response = await fetch(`https://api-visual-web-optimizer.damenor.site/web?url=${webUrl}`)
  return await response.json()
}

export const useWebAnalizer = () => {
  const [webUrl, setWebUrl] = useState<string | null>()
  const onSubmit = async () => {
    if (!webUrl) return
    const response = await getImagesFromWeb(webUrl)

    const images = await response.images.map(async (url: string) => {
      const response = await fetch(url)
      const blob = await response.blob()
      const { size, type } = blob
      return { size, sizeFormatted: toFormatBytes(size), type, url }
    })
    return await Promise.all(images)
  }
  return { onSubmit, setWebUrl }
}

{
  /* <img width="260px" style={{ backgroundColor: 'var(--color-bg-secondary)', borderRadius: '16px' }} src="https://o.remove.bg/downloads/8efceee2-5a85-45ac-b444-a4fe5170574d/8-removebg-preview.png" alt="" />

        <p style={{ paddingTop: '64px', maxWidth: '450px' }}>Nuestra plataforma de búsqueda de imágenes te permite encontrar y mejorar rápidamente las imágenes de tu sitio web para mejorar la velocidad de carga y la experiencia del usuario. Acelera tu sitio web y aumenta tu visibilidad en los motores de búsqueda con nuestra solución de optimización de imágenes.</p>
        <form
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '16px auto', width: '100%', maxWidth: '960px' }}
          onSubmit={onSubmit}
        >
          <input placeholder="Inserta la dirección de tu web" type="url" onChange={e => setWebUrl(e.target.value)} />
          <button type="submit">¡Comienza a mejorar tu sitio web hoy mismo!</button>
        </form>
        {images
          .filter((img: any) => img.type.includes('image/'))
          .map((image: any) => (
            <div>
              <span>{image.sizeFormatted}</span>
              <span>{image.type.replace('image/', '')}</span>
              <img width="80px" src={image.url} />
            </div>
          ))} */
}

{
  /* <div style={{ maxWidth: '650px', width: '100%' }}>
          <h1 style={{ fontSize: '1.5rem', paddingBottom: '8px', textAlign: 'center', fontWeight: 'bold' }}>Visual Web Optimizer</h1>
          <img src="/logo.svg" alt="logo" style={{ width: '100%' }} />
        </div> */
}

{
  /* {  webUrl && <iframe src={webUrl} /> } */
}