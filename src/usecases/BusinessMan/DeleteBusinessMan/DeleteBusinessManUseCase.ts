import IBusinessManRepository from "../../../repositories/IBusinessManRepository";
export default class DeleteBusinessManUseCase{
    constructor(
        private userRepository: IBusinessManRepository
    ){}

    async run(id: string, user: string): Promise<void>{
        const userExists = await this.userRepository.findById(id);
        const deletingUserExists = await this.userRepository.findById(id);

        if(!userExists) { throw new Error('this user does not exists!!')}
        if(!deletingUserExists) { throw new Error('this deleting user does not exists!!')}
        if(!userExists.status) { throw new Error('User already desactivated!!')}
        
        await this.userRepository.delete(id, user);
    }
}