import { Schema, model, Types } from 'mongoose'
import { IVideo } from '../interface/IVideo'

const VideoSchema = new Schema<IVideo>({
    description: {
        required: true,
        type: String
    },
    linkVideo: {
        required: true,
        type: String
    },
    user: {
        type: Types.ObjectId,
        ref: 'UserModel'
    },
    status: {
        default: true,
        type: Boolean
    }
}, {
    versionKey: false,
    timestamps: true,
})


export default model('VideoModel', VideoSchema)
