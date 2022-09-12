import { Request, Response } from 'express';
import { IUserInputDTO } from '../interface/IUser'
import { HttpResponse } from '../utils/response.handle';
import { UserService } from '../services/user.service'

export class UserController {
    constructor(
        private  readonly httpResponse: HttpResponse = new HttpResponse(),
        private  readonly userService: UserService = new UserService()
    ){}

    public async createUserHandler(req: Request, res: Response) {
        try {
            const user:IUserInputDTO = req.body

            const createdUserToken = await this.userService.create(user)

            if (!createdUserToken) {
                return this.httpResponse.BadRequest(res, 'NO SE PUDO CREAR AL USUARIO')
            }

            return this.httpResponse.Created(res, { token: createdUserToken })

        } catch ( err ) {
            return this.httpResponse.Error(res, err)
        }
    }
}
