import { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { RoutePage } from '@/components'

import { homePageRoute } from './HomePage'
import { cloudinaryUploadImage, getImageData } from '@/services'
import { useLabelsContext, useLoadingContext } from '@/contexts'
import { Button, ContainerTwoUp } from '@/ui'
import { cloudinary } from '@/tools'
import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect'

export const RemoveBgPage: FC = () => {
  const { state } = useLocation()
  const { labels } = useLabelsContext('removeBg')
  const navigate = useNavigate()
  const { showLoading, hideLoading } = useLoadingContext()
  const [modifyImage, setModifyImage] = useState<string>('')
  const [processingImage, setProcessingImage] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (!state || !state.file) navigate(homePageRoute.path, { replace: true })
      showLoading()
      const response = await cloudinaryUploadImage(state.file)
      const imageWithoutBg = cloudinary.image(response.public_id).effect(backgroundRemoval())
      const interval = setInterval(() => {
        const img = new Image()
        img.src = imageWithoutBg.toURL()
        img.onload = () => {
          setProcessingImage(false)
          setModifyImage(imageWithoutBg.toURL() as any)
          hideLoading()
          clearInterval(interval)
        }
        img.onerror = event => {
          console.log({ event })
          setHasError(true)
          clearInterval(interval)
          setProcessingImage(false)
          hideLoading()
        }
      }, 500)
      return () => {
        clearInterval(interval)
      }
    })()
  }, [])

  if (!state || !state.file || processingImage) return <></>

  const originalImage = URL.createObjectURL(state.file)

  if (hasError)
    return (
      <div
        style={{
          display: 'flex',
          paddingTop: 'var(--app-header-height)',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '960px',
          margin: '0 auto',
        }}
      >
        <img
          style={{ width: '100%', maxWidth: '600px' }}
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homer-meme-1547553537.gif?crop=0.9833333333333333xw:1xh;center,top&resize=1200:*"
        />
        <h2
          style={{
            //  maxWidth: '450px',
            fontSize: 'clamp(1.5rem, 5vw, 3rem)',
            color: 'var(--color-danger)',
            textAlign: 'center',
            padding: '16px',
          }}
        >
          {labels.error}
        </h2>
        <div style={{ maxWidth: '300px' }}>
          <Button onClick={() => navigate(homePageRoute.path)}>{labels.errorButton}</Button>
        </div>
      </div>
    )

  return (
    <div style={{ padding: '' }}>
      <ContainerTwoUp leftImage={originalImage} rightImage={modifyImage} />
      {/* <img src={image} alt="image-preview" /> */}
    </div>
  )
}

export const removeBgPageRoute: RoutePage = {
  label: 'removeBg.title',
  path: '/remove-bg',
  element: <RemoveBgPage />,
}
