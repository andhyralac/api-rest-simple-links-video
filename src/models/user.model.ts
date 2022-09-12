import { Schema, model } from 'mongoose'
import { IUser } from '../interface/IUser'

const UserSchema = new Schema<IUser>({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    status: {
        default: true,
        type: Boolean
    }
}, {
    versionKey: false,
    timestamps: true,
})


export default model('UserModel', UserSchema)
