export interface IUserInputDTO {
    name: string;
    email: string;
    password: string;
}

export interface IUser extends IUserInputDTO {
    _id: string;
    status: boolean;
}
