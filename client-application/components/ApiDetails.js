import styles from "./ApiDetails.module.css";

export default function ApiDetails({ resourceServer, api, token }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.title}>API Endpoint</h3>
        <div className={styles.endpoint}>
          <code className={styles.code}>GET</code>
          <span className={styles.path}>{api}</span>
        </div>
        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.label}>Resource Server:</span>
            <span className={styles.value}>{resourceServer}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Auth Method:</span>
            <span className={styles.value}>Bearer Token</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>Token Scope:</span>
            <span className={styles.value}>openid profile email</span>
          </div>
        </div>
      </div>
    </div>
  );
}
