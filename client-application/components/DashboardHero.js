"use client";

import styles from "./DashboardHero.module.css";

export default function DashboardHero({ user }) {
  return (
    <div className={styles.hero}>
      <div className={styles.gradient} />
      <div className={styles.content}>
        <div className={styles.status}>
          <span className={styles.statusText}>Secure Session Active</span>
        </div>
        <div className={styles.textSection}>
          <h1 className={styles.title}>
            Welcome back, {user?.given_name || "User"}!
          </h1>
          <p className={styles.subtitle}>
            You have successfully authenticated via Keycloak using the PKCE
            flow. This dashboard contains your protected user data.
          </p>
        </div>
      </div>
    </div>
  );
}
