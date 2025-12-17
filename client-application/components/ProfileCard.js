"use client";

import styles from "./ProfileCard.module.css";

export default function ProfileCard({ user }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.icon}></div>
          <h3 className={styles.title}>User Profile Data</h3>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.field}>
          <p className={styles.label}>Full Name</p>
          <p className={styles.value}>
            {`${user?.given_name} ${user?.family_name}` || "Demo User"}
          </p>
        </div>
        <div className={styles.field}>
          <p className={styles.label}>Email Address</p>
          <div className={styles.valueRow}>
            <p className={styles.value}>{user?.email || "user@example.com"}</p>
          </div>
        </div>
        <div className={styles.field}>
          <p className={styles.label}>Current Role</p>
          <div className={styles.value}>
            {user?.realm_access.roles[0] || "USER"}
          </div>
        </div>
        <div className={styles.field}>
          <p className={styles.label}>Keycloak ID</p>
          <p className={styles.value}>
            {user?.sub?.slice(0, 16) || "f47ac10b-58cc..."}
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.footerText}>
          This data is retrieved securely from the ID Token.
        </p>
      </div>
    </div>
  );
}
