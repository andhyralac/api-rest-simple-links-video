import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import config from './config/config'
import { ConnectMongo } from './database/connection'
import { RouterApp } from './routes/index'


export class Server {
    private app = express()
    private port = config.API.PORT

    constructor() {
        this.middleware()
        this.routers()
        this.dbConnect()
    }


    private middleware() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(cors())
        this.app.use(helmet())
        if (config.API.ENVIRONMENT === 'DEVELOPMENT') {
            this.app.use(morgan('dev'))
        }
    }

    private routers() {
        this.app.use('/api/v1', new RouterApp().routers())
    }

    private dbConnect() {
        new ConnectMongo()
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.info(`Server on port ${this.port} :: ENV = ${config.API.ENVIRONMENT}`)
        })
    }
}
