import { BaseRouter } from './base.routes'
import { VideoController } from '../controllers/video.controller'
import { SharedMiddleware } from '../middleware/shared.middleware'



export class VideoRouter extends BaseRouter<VideoController, SharedMiddleware> {
    constructor() {
        super(VideoController, SharedMiddleware)
    }

    routes(): void {
        this.router.post('/videos',
            (req, res, next) => this.middleware.checkAuth(req, res, next),
            (req, res) => this.controller.createVideoHandler(req, res))

        this.router.get('/videos',
            (req, res, next) => this.middleware.checkAuth(req, res, next),
            (req, res) => this.controller.getVideosByUserHandler(req, res))

        this.router.patch('/videos/:videoId',
            (req, res, next) => this.middleware.checkAuth(req, res, next),
            (req, res) => this.controller.updateVideoHandler(req, res)),

        this.router.delete('/videos/:videoId',
            (req, res, next) => this.middleware.checkAuth(req, res, next),
            (req, res) => this.controller.deleteVideoHandler(req, res))
    }
}
