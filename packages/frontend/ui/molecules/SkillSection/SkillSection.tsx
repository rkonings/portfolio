import styles from "./SkillSection.module.css";

interface SkillSection {
  children: JSX.Element | JSX.Element[];
  title: string;
}
export function SkillSection({ children, title }: SkillSection) {
  return (
    <section className={styles.skill_section}>
      <h3 className={styles.skill_section_title}>{title}</h3>
      {children}
    </section>
  );
}
