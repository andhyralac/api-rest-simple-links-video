import { connect } from 'mongoose'
import config from '../config/config'

export class ConnectMongo {
    constructor() {
        this.connection()
    }

    async connection() {
        await connect(config.API.MONGO_URL)
        console.info(`
        ################################################
        🛡️  SUCCESSFUL CONNECTION TO THE DATABASE 🛡️
        ################################################
        `)
    }
}
