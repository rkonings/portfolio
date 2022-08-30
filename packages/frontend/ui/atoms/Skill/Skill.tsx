import styles from "./Skill.module.css";

export enum SkillLevel {
  Level_1 = "1",
  Level_2 = "2",
  Level_3 = "3",
  Level_4 = "4",
  Level_5 = "5",
}

interface Skill {
  name: string;
  level: SkillLevel;
}

export function Skill({ name, level }: Skill) {
  return (
    <div className={styles.skill}>
      <div className={styles.name}>{name}</div>
      <div className={styles.level}>
        <div className={styles[`level_${level}`]}></div>
      </div>
    </div>
  );
}
