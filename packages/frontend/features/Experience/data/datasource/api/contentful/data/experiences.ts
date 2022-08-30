import { randRecentDate, randText, randUuid } from "@ngneat/falso";
import { ApiExperience } from "../models/Experience";

export const experiences: ApiExperience[] =  Array(10).fill(null).map(() => ({
    uid: randUuid(),
    title: randText({charCount: 10}),
    end: randRecentDate({ days: 10 }).toISOString(),
    start: randRecentDate({ days: 10 }).toISOString(),
    description: randText({charCount: 200}),
    company: randText({charCount: 10}),
}))