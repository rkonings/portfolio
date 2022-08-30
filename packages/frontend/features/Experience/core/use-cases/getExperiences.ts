import { getExperienceDatasource } from "features/Experience/data/datasource";
import { getExperienceRepository } from "../repository/Experience";

export function getExperiences(){
    const datasource = getExperienceDatasource()
    const repository = getExperienceRepository(datasource)

    return repository.getAll()
}