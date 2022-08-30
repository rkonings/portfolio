import { ApiExperience } from "./models/Experience"
import { experiences } from "./data/experiences";


const client = {
    getExperiences: function(): ApiExperience[] {
        return experiences
    },
    getExperience: function (uid: string): ApiExperience | undefined {
        return experiences.find( experience => experience.uid === uid )
    }
}

export function createClient(){
    return client
}