import { config } from 'dotenv'

import { appRouter } from '@/routes'
import { Server } from '@/tools'
// import { dbConnection } from '@utils/database.util'
// import { initialSetupDB } from '@utils/initial-setup-db.utli'


// variables enviroment
config()

// Initialize the database
// dbConnection()

// Initialize server
const server = new Server({ router: appRouter })
server.start()

// Create defaults values DB
// initialSetupDB()