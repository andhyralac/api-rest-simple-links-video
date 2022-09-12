import bcrypt from 'bcryptjs'

export class Password {
    encrypt(password: string): string {
        let salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    compare(encryptedPassword: string, unencryptedPassword: string): boolean {
        return bcrypt.compareSync(unencryptedPassword, encryptedPassword)
    }
}
