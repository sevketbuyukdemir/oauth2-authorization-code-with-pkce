import styles from "./FeatureCard.module.css";

export default function FeatureCard({ title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}></div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
