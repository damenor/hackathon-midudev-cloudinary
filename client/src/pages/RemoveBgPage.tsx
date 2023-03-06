import { FC, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { RoutePage } from '@/components'

import { homePageRoute } from './HomePage'
import { cloudinaryUploadImage } from '@/services'
import { useLoadingContext } from '@/contexts'

export const RemoveBgPage: FC = () => {

  const { state } = useLocation()
  const navigate = useNavigate()
  const { showLoading, hideLoading } = useLoadingContext()

  useEffect(() => {
    (async() => {
      if(!state || !state.file) navigate(homePageRoute.path, { replace: true })
      showLoading()
      const url = URL.createObjectURL(state.file)
      const response = await cloudinaryUploadImage(state.file)
      console.log({ url, response })
      hideLoading()
    })()
  }, [])

  return (
    <div>
      {/* <img src={image} alt="image-preview" /> */}
    </div>
  )
}

export const removeBgPageRoute: RoutePage = {
  label: 'removeBg.title',
  path: '/remove-bg',
  element: <RemoveBgPage />
}
