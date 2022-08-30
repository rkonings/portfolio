import { Company } from "../models/Company";

export interface CompanyRepository {
    getAll: () => Company[]
    get: (id:Company['id'] ) => Company | null
}


export function getCompanyRepository(): CompanyRepository {
    return {
        getAll: function() {
            return []
        },
        get: function() {
            return null
        }
    }
}