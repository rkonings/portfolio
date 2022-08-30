import { Skill, SkillLevel } from "@ui-atoms/Skill/Skill";
import { SkillSection } from "@ui-molecules/SkillSection/SkillSection";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <div className={styles.skills}>
      <SkillSection title="Front-end frameworks">
        <Skill name="React" level={SkillLevel.Level_5} />
        <Skill name="NextJS" level={SkillLevel.Level_3} />
        <Skill name="Vue" level={SkillLevel.Level_2} />
        <Skill name="Angular" level={SkillLevel.Level_2} />
        <Skill name="SolidJS" level={SkillLevel.Level_3} />
      </SkillSection>

      <SkillSection title="Testing">
        <Skill name="Jest" level={SkillLevel.Level_5} />
        <Skill name="Cypress" level={SkillLevel.Level_3} />
        <Skill name="React testing library" level={SkillLevel.Level_2} />
        <Skill name="Component testing" level={SkillLevel.Level_2} />
      </SkillSection>
      <SkillSection title="Cloud">
        <Skill name="AWS" level={SkillLevel.Level_5} />
        <Skill name="Google Cloud platform" level={SkillLevel.Level_3} />
      </SkillSection>
      <SkillSection title="Architectuur principes">
        <Skill name="State management" level={SkillLevel.Level_5} />
        <Skill name="Server-Side Rendering" level={SkillLevel.Level_3} />
        <Skill name="Single Page Applications" level={SkillLevel.Level_2} />
        <Skill name="Multi Page Applications" level={SkillLevel.Level_2} />
        <Skill name="Progressive Web Apps" level={SkillLevel.Level_3} />
      </SkillSection>

      <SkillSection title="Talen">
        <Skill name="Typescript" level={SkillLevel.Level_5} />
        <Skill name="Javascript" level={SkillLevel.Level_3} />
        <Skill name="Java" level={SkillLevel.Level_2} />
        <Skill name="Scala" level={SkillLevel.Level_2} />
      </SkillSection>
      <SkillSection title="Software architectuur">
        <Skill name="Event-Driven Design" level={SkillLevel.Level_5} />
        <Skill name="Mircoservices" level={SkillLevel.Level_3} />
        <Skill name="Component based" level={SkillLevel.Level_2} />
        <Skill name="Monorepo" level={SkillLevel.Level_2} />
      </SkillSection>
    </div>
  );
}
