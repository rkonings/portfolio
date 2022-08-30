import { ProjectCard } from "@ui-molecules/ProjectCard/ProjectCard";
import styles from "./ProjectCards.module.css";

export function ProjectCards() {
  return (
    <div className={styles.project_cards}>
      <ProjectCard title="KLM" subTitle="Mrt. 2021 heden" />
      <ProjectCard title="Nova Clima" subTitle="Feb. 2020 Okt. 2020" />
      <ProjectCard title="Swydo" subTitle="Dec. 2019 heden" />
      <ProjectCard
        title="React Component library"
        subTitle="Mei 2018 Dec. 2019"
      />
      <ProjectCard title="Persoonlijk CRM" subTitle="Jan. 2017 heden" />
      <ProjectCard title="Fletcher Hotels" subTitle="Mei 2017 Dec. 2018" />
    </div>
  );
}
