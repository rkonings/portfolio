import { ExperienceDatasource } from "features/Experience/data/datasource";
import { Experience } from "../models/Experience";

export interface ExperienceRepository {
    getAll: () => Experience[]
    // get: (id: Experience['id'] ) => Experience | null
}


export function getExperienceRepository(datasource: ExperienceDatasource): ExperienceRepository {
    return {
        getAll: function (){
            return datasource.getAll()
        }
    }
}