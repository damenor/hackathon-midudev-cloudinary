import { Cloudinary } from '@cloudinary/url-gen'

export const cloudinary = new Cloudinary({
  cloud: { cloudName: 'drd6zj0ws' },
  url: { secure: true },
})