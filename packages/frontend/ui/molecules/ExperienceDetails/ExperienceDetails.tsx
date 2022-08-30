import { Experience } from "@ui-molecules/Experience/Experience";
import styles from "./ExperienceDetails.module.css";

interface ExperienceDetailsProps {
  experience: Experience;
}

export function ExperienceDetails({
  experience: { company, endDate, startDate },
}: ExperienceDetailsProps) {
  return (
    <div className={styles.experience_details}>
      <h3 className={styles.date}>
        {startDate} - {endDate}
      </h3>
      <h3 className={styles.title}>{company}</h3>
      <div className={styles.introduction}>
        <p>
          Intergamma is de organisatie achter de doe-het-zelf-formules GAMMA en
          KARWEI. Met bijna 400 bouwmarkten in Nederland en België zijn ze een
          grote speler op de doe-het-zelfmarkt en in Europa horen ze bij de 15
          grootsten. Bij Intergamma heeft Randy als Front-end Software engineer
          mogen ontwikkelen aan het bestelproces van de e-commerce van GAMMA en
          Karwei. Samen met 4 scrum teams wordt er ontwikkeld aan de e-commerce
          om de brug tussen online en offline te verbeteren.
        </p>
      </div>

      <div>
        <h5 className={styles.heading}>Technology</h5>
        <ul>
          <li>Typescript</li>
          <li>React</li>
          <li>Styled components</li>
          <li>AWS</li>
          <li>CircleCI</li>
        </ul>
      </div>
    </div>
  );
}
