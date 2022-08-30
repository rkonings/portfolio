import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  subTitle: string;
}

export function ProjectCard({ title, subTitle }: ProjectCardProps) {
  return (
    <div className={styles.project_card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.sub_title}>{subTitle}</div>
    </div>
  );
}
