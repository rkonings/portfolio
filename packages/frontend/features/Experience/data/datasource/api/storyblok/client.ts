import { randUuid, randText, randRecentDate } from '@ngneat/falso';
import { ApiProject } from './models/Project';


const client = {
    queryProjects: function(): ApiProject[] {
        return [{
            uuid: randUuid(),
            title: randText({charCount: 10}),
            date: randRecentDate({ days: 10 }).toISOString(),
            intro: randText({charCount: 100}),
        }]
    },
    query: function (uuid: string): ApiProject {
        return {
            uuid,
            title: randText({charCount: 10}),
            date: randRecentDate({ days: 10 }).toISOString(),
            intro: randText({charCount: 100}),
        }
    }
}

export function createClient(){
    return client
}