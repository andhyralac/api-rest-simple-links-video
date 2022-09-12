import { Router } from 'express'

import { UserRouter } from './user.routes'
import { AuthRouter } from './auth.routes'
import { VideoRouter } from './video.routes'


export class RouterApp {

    constructor() {}

    routers(): Array<Router> {
        return [
            new UserRouter().router,
            new AuthRouter().router,
            new VideoRouter().router
        ]
    }
}
