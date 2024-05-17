import { IPassword } from "./Password";

export interface IUser {
    id: number | null,
    username: string | null,
    nickname: string | null,
    password: string | null,
    saved_passwords: IPassword[]
}