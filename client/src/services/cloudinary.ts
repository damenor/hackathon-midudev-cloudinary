import { fetcher } from '@/tools'

export const cloudinaryUploadImage = async (fileUrl: string) => {
  const body = new URLSearchParams()
  body.append('upload_preset', 'x78tdh6o')
  body.append('timestamp', `${Date.now() / 1000}`)
  body.append('api_key', '593878146939498')
  body.append('file', fileUrl)
  return await fetcher(`https://api.cloudinary.com/v1_1/damenor/image/upload`, { method: 'POST', body })
}
