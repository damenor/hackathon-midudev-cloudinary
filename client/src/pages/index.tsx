import { HomePage } from './HomePage'
import { RemoveBgPage } from './RemoveBgPage'
import { WebAnalyzePage } from './WebAnalyzePage'

const homePageRoute = {
  path: '/',
  element: <HomePage />,
}
const removeBgPageRoute = {
  path: '/remove-bg',
  element: <RemoveBgPage />
}
const webAnalyzePageRoute = {
  path: '/web-analyze',
  element: <WebAnalyzePage />,
}

export {
  homePageRoute,
  removeBgPageRoute,
  webAnalyzePageRoute
}

export const appPages = [
  homePageRoute,
  removeBgPageRoute,
  webAnalyzePageRoute
]
