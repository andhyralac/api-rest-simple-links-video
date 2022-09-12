import { BaseRouter } from './base.routes'
import { AuthController } from '../controllers/auth.controller'
import { SharedMiddleware } from '../middleware/shared.middleware'



export class AuthRouter extends BaseRouter<AuthController, SharedMiddleware> {
    constructor() {
        super(AuthController, SharedMiddleware)
    }

    routes(): void {
        this.router.post('/login', (req, res) => this.controller.login(req, res))

    }
}
