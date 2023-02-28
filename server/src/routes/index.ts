import { Router } from 'express'
import puppeteer from 'puppeteer'

export const appRouter = Router()

const isValidUrl = (urlString: string) => {
  var urlPattern = new RegExp('^(https?:\\/\\/)?'+ 
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
  '(\\#[-a-z\\d_]*)?$','i'); 
  // const urlPattern = new RegExp(`(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`)
  return !!urlPattern.test(urlString);
}

appRouter.get('/', (_req, res) => res.send('API - Auth'))

appRouter.get('/web', async (req, res) => {
  const url = req.query.url as string

  if (!url) return res.status(400).json({ error: true, message: 'La url es requerida' })

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(url)
  const imagesWeb = await (await page.$$eval('img', images => images.map(image => image.src)))
  await browser.close()
  const imagesNotDuplicates = [...new Set(imagesWeb)].filter(img => img !== '' && isValidUrl(img))
  return res.status(200).json({ images: imagesNotDuplicates })
})
