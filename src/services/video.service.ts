import VideoModel from '../models/video.model'
import { IVideo, IVideoInputDTO } from '../interface/IVideo';
import { BaseService } from './base.service';




export class VideoService extends BaseService<typeof VideoModel> {

    constructor() {
        super(VideoModel)
    }

    async getByUser(user: string): Promise<IVideo[] | null> {
        return await this.model.find({ user: user, status: true }).exec()
    }

    async create(videoInput: IVideoInputDTO): Promise<IVideo> {
        return await this.model.create(videoInput)
    }

    async update(newVideoInput: IVideoInputDTO, videoId: string): Promise<IVideo | null> {
        return await this.model.findByIdAndUpdate(videoId,
            { description: newVideoInput.description, linkVideo: newVideoInput.linkVideo },
            { new: true })
    }

    async delete(videoId: string): Promise<boolean> {
        const video = await this.model.findByIdAndUpdate(videoId, { status: false }, { new: true})

        return (!video?.status) ? true : false;
    }
}
