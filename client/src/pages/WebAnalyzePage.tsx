import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { RoutePage, WebAnalyzeImages } from '@/components'
import { useLoadingContext } from '@/contexts'
import { getWebAnalyzeImagesData } from '@/services'
import { WebAnalyzeImageType } from '@/types'

export const WebAnalyzePage: FC = () => {
  const [images, setImages] = useState<WebAnalyzeImageType[]>([])
  const { showLoading, hideLoading } = useLoadingContext()
  const [searchParams] = useSearchParams()

  const modalText = 'Enviámos a nuestros mejores expertos analizar la web, espere unos segundos'

  const loadImages = async () => {
    showLoading(modalText)
    const webUrl = searchParams.get('webUrl')
    const imagesData = await getWebAnalyzeImagesData(webUrl!)
    setImages(imagesData)
    hideLoading()
  }

  useEffect(() => {
    loadImages()
  }, [])

  return (
    <div style={{ paddingTop: 'var(--app-header-height)' }}>
      <WebAnalyzeImages images={images} />
    </div>
  )
}

export const webAnalyzePageRoute: RoutePage = {
  path: '/web-analyze',
  element: <WebAnalyzePage />,
}
