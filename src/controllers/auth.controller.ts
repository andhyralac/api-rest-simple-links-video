import { Request, Response } from 'express';
import { HttpResponse } from '../utils/response.handle';
import { AuthService } from '../services/auth.service'
import { IError } from '../interface/IError';


export class AuthController {
    constructor(
        private  readonly httpResponse: HttpResponse = new HttpResponse(),
        private  readonly authService: AuthService = new AuthService()
    ){}


    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const generatedToken = await this.authService.validateUser(email, password)
            if (!generatedToken) {
                return this.httpResponse.BadRequest(res, 'USUARIO y/o CONTRASEÑA INCORRECTOS')
            }

            return this.httpResponse.Ok(res, generatedToken)

        } catch (err) {
            return this.httpResponse.Error(res, err)
        }
    }
}
