import styles from "./ResourceResponseCard.module.css";

export default function ResourceResponseCard({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Resource Server Response</h3>
        <div className={styles.status}>
          <div className={styles.statusIndicator}></div>
          Success
        </div>
      </div>
      <div className={styles.content}>
        <pre className={styles.json}>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
