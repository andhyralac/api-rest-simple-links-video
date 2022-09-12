import { sign, verify } from 'jsonwebtoken'
import config from '../config/config'
import { IUser } from '../interface/IUser'
import { IPayload } from '../interface/IPayload';
import { IError } from '../interface/IError';



export class Token {
    private JWT_SECRET = config.API.JWT_SECRET

    public generateToken(user: IUser): string {
        const payload: IPayload = {
            id: user._id,
            email: user.email
        }

        const jwt = sign(payload, this.JWT_SECRET, {
            expiresIn: '4h'
        })

        return jwt
    }


    public async verifyToken(jwt: string): Promise<IPayload | null> {
        try {

            return verify(jwt, this.JWT_SECRET) as IPayload

        } catch ( err: any ) {
            return null
        }
    }
}
