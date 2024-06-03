import IUserRepository from "../../../repositories/IUserRepository";
import { IUserUpdateRequest, IUserUpdateResponse } from "../../../interfaces/IUser";

export default class UpdateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}

 async run(data: IUserUpdateRequest, id: string): Promise<IUserUpdateResponse>{  
    const userExists = await this.userRepository.findById(id);
    if(userExists && !data.birthdate) { data.birthdate = userExists.birthdate }
    const user = await this.userRepository.update(data, id);
    return user
    }
}