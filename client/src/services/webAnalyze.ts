import { API_BASE_URL } from '@/constants'
import { fetcher, toFormatBytes } from '@/tools'

export const getImageData = async (url: string) => {
  const response = await fetch(url)
  const blob = await response.blob()
  const { size, type } = blob
  return { size, sizeFormatted: toFormatBytes(size), type: type.replace('image/', ''), url }
}

const convertToImageData = async (images: string[]) => {
  const imagesPromises = await images.map(getImageData)
  return await Promise.all(imagesPromises)
}

export const getWebAnalyzeImages = async (webUrl: string) => {
  const url = `${API_BASE_URL}/web?url=${webUrl}`
  return await fetcher(url)
}

export const getWebAnalyzeImagesData = async (webUrl: string) => {
  const { images: imagesFromWeb } = await getWebAnalyzeImages(webUrl!)
  return await convertToImageData(imagesFromWeb)
}
