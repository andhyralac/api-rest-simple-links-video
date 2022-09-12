import { NextFunction, Request, Response } from 'express';
import { Token } from '../utils/jwt.handle';
import { HttpResponse } from '../utils/response.handle';
import { UserService } from '../services/user.service';



export class SharedMiddleware {
    constructor(
        private readonly userService: UserService = new UserService(),
        private readonly httpResponse: HttpResponse = new HttpResponse(),
        private readonly token: Token = new Token()
    ){}

    async checkAuth(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.header('token-app')) {
                return this.httpResponse.Unauthorized(res, 'USUARIO NO ESTA AUTENTICADO')
            }

            const token = req.header('token-app')
            const tokenData = await this.token.verifyToken(token!)
            if (!tokenData) {
                return this.httpResponse.Unauthorized(res, 'TOKEN QUE VIENE EN LA PETICION ES INVALIDO')
            }

            const user = await this.userService.findOneByEmail(tokenData.email)
            if (!user || !user.status) {
                return this.httpResponse.Unauthorized(res, 'TOKEN PERTENECE A UN USUARIO DESACTIVADO')
            }

            req.user = user._id

            next()

        } catch ( err ) {
            return this.httpResponse.Error(res, err)
        }
    }
}
