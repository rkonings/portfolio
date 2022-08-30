import { Company } from "./Company"
import { Technology } from "./Technology"

export interface Project {
    name: string
    company: Company
    technologies: Technology[]
    description: string
}