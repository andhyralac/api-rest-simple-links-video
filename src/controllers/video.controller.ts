import { Request, Response } from 'express';
import { IVideoInputDTO, IVideo } from '../interface/IVideo';
import { VideoService } from '../services/video.service';
import { HttpResponse } from '../utils/response.handle';



export class VideoController {
    constructor(
        private readonly httpResponse: HttpResponse = new HttpResponse(),
        private readonly videoService: VideoService = new VideoService()
    ) {}

    public async createVideoHandler(req: Request, res: Response) {
        try {
            const videoInput:IVideoInputDTO = req.body
            videoInput.user = req.user

            const createdVideo = await this.videoService.create(videoInput)
            if (!createdVideo) {
                return this.httpResponse.BadRequest(res, 'NO SE PUDO ALMACENAR LOS DATOS')
            }

            return this.httpResponse.Created(res, { video: createdVideo })

        } catch ( err ) {
            return this.httpResponse.Error(res, err)
        }
    }

    public async getVideosByUserHandler(req: Request, res: Response) {
        try {
            const user = req.user
            const videos = await this.videoService.getByUser(user)
            return this.httpResponse.Ok(res, { videos: videos })

        } catch ( err ) {
            return this.httpResponse.Error(res, err)
        }
    }

    public async updateVideoHandler(req: Request, res: Response) {
        try {
            const { videoId } = req.params
            const newVideo:IVideoInputDTO = req.body

            const updatedVideo = await this.videoService.update(newVideo, videoId)
            if (!updatedVideo) {
                return this.httpResponse.BadRequest(res, 'NO SE PUDO ACTUALIZAR LOS DATOS DE VIDEO')
            }

            return this.httpResponse.Ok(res, updatedVideo)
        } catch ( err ){
            return this.httpResponse.Error(res, err)
        }
    }

    public async deleteVideoHandler(req: Request, res: Response) {
        try {
            const { videoId } = req.params
            const deletedVideo = await this.videoService.delete(videoId)

            if(!deletedVideo) {
                return this.httpResponse.BadRequest(res, 'EL ID NO COINCIDE CON NINGUN REGISTRO DE VIDEOS')
            }

            return this.httpResponse.Ok(res, 'SE ELIMINO EL REGISTRO DEL VIDEO')
        } catch ( err ) {

        }
    }
}
