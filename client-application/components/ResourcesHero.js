"use client";

import styles from "./ResourcesHero.module.css";

export default function ResourcesHero({ user, onFetchData, loading, error }) {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>API Resources</h1>
        <p className={styles.subtitle}>
          Fetch protected data from your resource server using the access token
        </p>
        <div className={styles.welcome}>
          <span className={styles.welcomeText}>
            Welcome back, {user?.given_name || "User"}
          </span>
        </div>
        <button
          className={`${styles.fetchBtn} ${loading ? styles.loading : ""}`}
          onClick={onFetchData}
          disabled={loading}
        >
          {loading ? (
            <>
              <div className={styles.spinner}></div>
              Fetching...
            </>
          ) : (
            "Fetch Protected Data"
          )}
        </button>
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
}
