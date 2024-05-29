import { IPharmacyRequest, IPharmacyResponse } from "@/interfaces/IPharmacy";
import IResultPaginated from "@/interfaces/IResultPaginated";

export default interface IPharmacyRepository {
    createPharmacy: (data: IPharmacyRequest) => Promise<IPharmacyResponse | Error>
    readPharmacies:  (page: number, perPage: number) => Promise<IResultPaginated>
    readPendingPharmacies:  (page: number, perPage: number) => Promise<IResultPaginated>
    readAllDeletedPharmacies:  (page: number, perPage: number) => Promise<IResultPaginated>
    findByEmail: (email: string) => Promise<IPharmacyResponse | null>;
    findById: (id: string) => Promise<IPharmacyResponse | null>;
    findByIdPendingPharmacy: (id: string) => Promise<IPharmacyResponse | null>;
    delete: (id: string , user: string) => Promise<void>;

// TO DO LIST  

    //readAllUsers: ()
    //readAllEmployes : ()
    //readAllProducts : ()
    //readAllBusiness_men : ()
    //read all vip users: ()  -- users in premmiun mode
    //read all products minimum expiration date : ()
    //read the most sold produt : ()
    //read the most quantity product : ()
    //read the minium quantity product: ()
}