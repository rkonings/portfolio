import { DetailedHTMLProps, LiHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Experience.module.css";

export interface Experience {
  startDate: string;
  endDate: string;
  company: string;
  id: string;
}

interface ExperienceProps
  extends Experience,
    PropsWithChildren,
    Omit<
      DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
      "id"
    > {}

export function Experience({
  startDate,
  endDate,
  company,
  children,
  ...props
}: ExperienceProps) {
  return (
    <li {...props} className={styles.experience}>
      <div className={styles.dot}></div>
      <time className={styles.time}>
        {startDate} - {endDate}
      </time>
      <h3 className={styles.company}>{company}</h3>
      <p className={styles.description}>{children}</p>
    </li>
  );
}
