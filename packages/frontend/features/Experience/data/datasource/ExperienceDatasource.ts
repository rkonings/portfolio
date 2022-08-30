import { Company, Experience } from "features/Experience/core/models"
import { createClient } from "./api/contentful/client"

export interface ExperienceDatasource {
    getAll: () => Experience[]
}

export function getExperienceDatasource(): ExperienceDatasource {
    const client = createClient()
    return {
        getAll: () => {
            return client.getExperiences().map( ({uid, title, description, end, start, company}) => ({
                company,
                description,
                title,
                endDate: end,
                startDate: start,
                id: uid,
                projects: [],
            }) )
        }
    }
}