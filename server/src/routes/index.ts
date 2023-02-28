import { Router } from 'express'
import puppeteer from 'puppeteer'

export const appRouter = Router()

const isValidUrl = (urlString: string) => {
  var urlPattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  // const urlPattern = new RegExp(`(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`)
  return !!urlPattern.test(urlString)
}

appRouter.get('/', (_req, res) => res.send('API - Auth v2'))

appRouter.get('/web', async (req, res) => {
  const url = req.query.url as string

  if (!url) return res.status(500).json({ error: true, message: 'La url es requerida' })

  const browserFetcher = puppeteer.createBrowserFetcher()
  const revisionInfo = await browserFetcher.download('1095492')

  if(!revisionInfo) return res.status(500).json({ error: true, message: 'ups! hubo algun error' })

  const browser = await puppeteer.launch({
    executablePath: revisionInfo.executablePath,
    ignoreDefaultArgs: ['--disable-extensions'],
    headless: true,
    args: ['--no-sandbox', '--disabled-setupid-sandbox'],
  })
  const page = await browser.newPage()
  await page.goto(url)
  const imagesWeb = await await page.$$eval('img', images => images.map(image => image.src))
  await browser.close()
  const imagesNotDuplicates = [...new Set(imagesWeb)].filter(img => img !== '' && isValidUrl(img))
  return res.status(200).json({ images: imagesNotDuplicates })
})
