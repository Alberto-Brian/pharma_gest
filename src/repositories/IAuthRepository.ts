
import { ISigInResponse } from "../interfaces/IAuth"

export default interface IAuthRepository{
    sigin: (email: string, password: string) => Promise<ISigInResponse | void>
}