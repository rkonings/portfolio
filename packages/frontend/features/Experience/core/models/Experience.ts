import { Company } from "./Company";
import { Project } from "./Project";

export interface Experience {
    id: string
    startDate: string
    endDate: string
    title: string
    company: string
    projects: Project[]
}