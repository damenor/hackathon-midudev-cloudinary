import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

interface ServerArgs { router: express.Router }

export class Server {
  app: express.Application
  private appRouter: express.Router

  constructor({ router }: ServerArgs) {
    this.app = express()
    this.appRouter = router
    this.config()
    this.middlewares()
    this.routes()
  }
  
  start = () => {
    this.app.listen(this.app.get('PORT'), () => console.log(`Server on port ${this.app.get('PORT')}`))
  }

  private config = () => {
    this.app.set('PORT', process.env.PORT)
    this.app.use(express.json())
  }

  private routes = () => this.app.use(this.appRouter)

  private middlewares = () => {
    this.app.use(cors())
    this.app.use(morgan('dev'))
    this.app.use(helmet())
  }
}
