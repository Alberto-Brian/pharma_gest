import IUserRepository from "../../../repositories/IUserRepository";
import {IUserUpdateImageResponse } from "../../../interfaces/IUser";

export default class UpdateImageUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}

 async run(filename: string, id: string): Promise<IUserUpdateImageResponse>{
        const user = await this.userRepository.updateImage(filename, id)
        return user
    }
}