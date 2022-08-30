import { ExperienceOverview } from "@ui-organism/ExperienceOverview/ExperienceOverview";
import { getExperiences } from "../core/use-cases";

export function Experiences() {
  const experiences = getExperiences();

  return <ExperienceOverview experiences={experiences} />;
}
