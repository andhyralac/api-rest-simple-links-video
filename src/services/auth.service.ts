import { Password } from '../utils/password.handle'
import { IError } from '../interface/IError';
import { UserService } from './user.service'
import { Token } from '../utils/jwt.handle'


export class AuthService {

    constructor(
        private readonly userService: UserService = new UserService(),
        private readonly password: Password = new Password(),
        private readonly token:Token = new Token()
    )
    {}

    async validateUser(email:string, password:string): Promise<{ token:string } | null> {
        const user = await this.userService.findOneByEmail(email)
        if (!user) {
            return null
        }

        const isvalidPassword = this.password.compare(user.password, password)
        if (!isvalidPassword) {
            return null
        }

        const token = this.token.generateToken(user)
        return { token: token }
    }
}
