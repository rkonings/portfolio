import styles from "./HeroTitle.module.css";

export function HeroTitle() {
  return (
    <div>
      <h1 className={styles.title}>
        <span>Randy</span>
        <span>Konings</span>
      </h1>
      <h2 className={styles.sub}>
        <span>Frontend</span>
        <span>Developer</span>
      </h2>
    </div>
  );
}
