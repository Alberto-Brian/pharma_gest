
import { IBusinessMan } from "../../../interfaces/IBusinessMan";
import IBusinessManRepository from "../../../repositories/IBusinessManRepository";
import validator from "validator";

export default class FindByEmailBusinessMasUseCase {
  constructor(
    private userRepository: IBusinessManRepository
  ){}
  async run(email: string): Promise<IBusinessMan | Error> {
    const user = await this.userRepository.findByEmail(email);
    if(!validator.isEmail(email)){
      throw new Error('Invalid email!!');
    }

    if(!user){
      throw new Error('Business man doesn\'t exist')
    }
      return user
  }
}