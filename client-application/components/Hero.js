"use client";

import styles from "./Hero.module.css";

export default function Hero({ authenticated, onLoginClick, tokenInfo }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heroCard}>
          <div className={styles.statusIndicator}>
            <div
              className={`${styles.statusDot} ${
                authenticated ? styles.authenticated : ""
              }`}
            />
            <span className={styles.statusText}>
              Status: {authenticated ? "Authenticated (PKCE)" : "Public Access"}
            </span>
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>Authorization Code + PKCE</h1>
            <h2 className={styles.subtitle}>
              Secure OIDC flow using Proof Key for Code Exchange.
              {authenticated && tokenInfo && (
                <>
                  <br />
                  <strong>User: {tokenInfo.preferred_username}</strong> |
                  Expires: {new Date(tokenInfo.exp * 1000).toLocaleString()}
                </>
              )}
            </h2>
          </div>

          {!authenticated && (
            <div className={styles.cta}>
              <button onClick={onLoginClick} className={styles.loginBtn}>
                <span>Login with Keycloak (PKCE)</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
