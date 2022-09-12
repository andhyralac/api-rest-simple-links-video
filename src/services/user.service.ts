import { BaseService } from './base.service'
import { IUserInputDTO, IUser } from '../interface/IUser';
import { Token } from '../utils/jwt.handle';
import { Password } from '../utils/password.handle'
import UserModel from '../models/user.model'


export class UserService extends BaseService<typeof UserModel> {

    constructor(
        private readonly token:Token = new Token(),
        private readonly password:Password = new Password()
    ) {
        super(UserModel)
    }

    public async create(userInput: IUserInputDTO): Promise<string> {
        userInput.password = this.password.encrypt(userInput.password)
        const user = await this.model.create(userInput)
        const tokenUser = this.token.generateToken(user)
        return tokenUser
    }

    public async findOneByEmail(email:string): Promise<IUser | null> {
        return await this.model.findOne({ email: email }).exec()
    }

    public async findById(id:string): Promise<IUser | null> {
        return await this.model.findById(id).exec()
    }


}
