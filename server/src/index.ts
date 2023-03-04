import { config } from 'dotenv'

import { appRouter } from './routes'
import { Server } from './tools'

config()
const server = new Server({ router: appRouter })
server.start()
