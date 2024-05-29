import IEmployeeRepository from "../../../repositories/IEmployeeRepository";

export default class DeleteEmployeeUseCase {
    constructor(
        private employeeRepository: IEmployeeRepository
    ){}

 async run(id: string, user: string): Promise<void>{

        const employeeExists = await this.employeeRepository.findById(id);

        if(!user){
            throw new Error('User not selected!!')
        }

        if(!employeeExists){
            throw new Error('Employee does not exists');
        }

        if(!employeeExists.status){
            throw new Error('Employee already desactivated!!');
        }

        const employee = await this.employeeRepository.delete(id, user);
        return employee
    }
}