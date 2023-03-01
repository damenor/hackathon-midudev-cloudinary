
import { Router } from 'express'
// import puppeteer from 'puppeteer'
import axios from 'axios'
import cheerio from 'cheerio'

const USER_AGENTS = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
]

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

  // const browserFetcher = puppeteer.createBrowserFetcher()
  // const revisionInfo = await browserFetcher.download('1095492')

  // if(!revisionInfo) return res.status(500).json({ error: true, message: 'ups! hubo algun error' })

  const randomNumber = Math.floor(Math.random() * USER_AGENTS.length)
  const userAgent = USER_AGENTS[randomNumber]
  const header = { "User-Agent": userAgent }

  const response = await axios.get(url, { headers: header })
  const $ = cheerio.load(response.data)
  const imagesTemp: string[] = []
  $('img').each((_i, element) => {
    const imageAttr = $(element).attr()
    const imageSrc = imageAttr?.src.includes('http') ? imageAttr?.src : `${url}${imageAttr?.src}`
    imagesTemp.push(imageSrc)
  })
  const images = [...new Set(imagesTemp)].filter(img => img !== '' && isValidUrl(img))
  return res.status(200).json({ images })

  // try {
  //   const browser = await puppeteer.launch({
  //     // executablePath: revisionInfo.executablePath,
  //     ignoreDefaultArgs: ['--disable-extensions'],
  //     headless: true,
  //   })
  //   const page = await browser.newPage()
  //   await page.goto(url)
  //   const imagesWeb = await await page.$$eval('img', images => images.map(image => image.src))
  //   await browser.close()
  //   const imagesNotDuplicates = [...new Set(imagesWeb)].filter(img => img !== '' && isValidUrl(img))
  //   return res.status(200).json({ images: imagesNotDuplicates })
  // } catch (error) {
  //   return res.status(500).json({ error: true, message: 'ups' }) 
  // }
})
