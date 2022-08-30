import { Company, Project } from "features/Experience/core/models";
import { createClient } from "./api/storyblok/client";

export interface ProjectDatasource {
    getAll: () => Project[]
}

export function getProjectDatasource(): ProjectDatasource {
    const client = createClient()
    return {
        getAll: () => {
            const projects = client.queryProjects()
            return projects.map(({title, intro}) => ({
                name: title,
                company: {} as Company,
                technologies: [],
                description: intro
            }) )
        }
    }
}