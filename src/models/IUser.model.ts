import { IResponseApiOne } from "./IResponseApi.model";

export interface IUserRequestBody {
    status: boolean;
}

export interface IUser {
    id: string;
    full_name: string;
    first_name: string;
    last_name: string;
    email: string;
    status: boolean;
    createdAt: number;
}

export interface IBodyLogin {
    resetPass: boolean;
    token: string;
    user: IUser;
}

export type TUserLoginResponse = IResponseApiOne<IBodyLogin> | IBodyLogin
