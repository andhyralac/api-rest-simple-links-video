
export interface IVideoInputDTO {
    description: string;
    linkVideo: string;
    user?: any;
}


export interface IVideo extends IVideoInputDTO {
    _id: string;
    status: boolean;
}
