import { BaseRouter } from './base.routes'
import { UserController } from '../controllers/user.controller'
import { SharedMiddleware } from '../middleware/shared.middleware'



export class UserRouter extends BaseRouter<UserController, SharedMiddleware> {
    constructor() {
        super(UserController, SharedMiddleware)
    }

    routes(): void {
        this.router.post('/users', (req, res) => this.controller.createUserHandler(req, res))

        this.router.get('/users', (req, res) => {
            res.send('USERS GET')
        })
    }
}

