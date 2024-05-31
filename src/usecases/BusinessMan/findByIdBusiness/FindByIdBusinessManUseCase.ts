import IBusinessManRepository from "../../../repositories/IBusinessManRepository";
import { IBusinessMan } from "../../../interfaces/IBusinessMan";
export default class FindByIdUserUseCase{
  constructor(
    private userRepository: IBusinessManRepository
  ){ }

  async run(id: string): Promise<IBusinessMan | Error>{
    const user = await this.userRepository.findById(id);
    if(!user){
      throw new Error("Business masn doesn\'t exist!!");
    }
    return user;
  }
}