import IEmployeeRepository from "../../../repositories/IEmployeeRepository";
import { IEmployeeCreateRequest, IEmployeeCreateResponse } from "../../../interfaces/IEmployee";
import IPharmacyRepository from "../../../repositories/IPharmacyRepositorio"; 
import validator from "validator";

export default class CreateEmployeeUseCase {
    constructor(
        private employeeRepository: IEmployeeRepository,
        private pharmacyRepository: IPharmacyRepository

    ){}

 async run(data: IEmployeeCreateRequest, id_pharmacy: string, confirm_password: string): Promise<IEmployeeCreateResponse>{

        const pharmacyExists = await this.pharmacyRepository.findById(id_pharmacy);
        
        if(!data.username || !data.email || !data.password || 
           !id_pharmacy ||   !confirm_password){
            throw new Error('Fill all mandatory fields!!');
        }

        if(!validator.isEmail(data.email)){
            throw new Error('Invalid email!!');
        }
        
        if(data.password !== confirm_password){
            throw new Error('Passwords do not match. Please try again');
        }

        const employeeExists = await this.employeeRepository.findByEmail(data.email);
        if(employeeExists){
            throw new Error('Employee already exists!!')
        }

        if(!pharmacyExists){
            throw new Error('Pharmacy not exists!!');
        }

        if(!pharmacyExists.status){
            throw new Error('Pharmacy desactivated!!');
        }
        const employee = await this.employeeRepository.create(data, id_pharmacy)
        return employee
    }
}