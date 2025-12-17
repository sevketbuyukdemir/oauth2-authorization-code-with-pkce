"use client";

import styles from "./TokenDetails.module.css";

export default function TokenDetails({ token }) {
  const safeToken = token || {};

  return (
    <div className={styles.details}>
      <details className={styles.summary}>
        <summary className={styles.summaryContent}>
          <div className={styles.summaryLeft}>
            <span>Developer Details: Access Token</span>
          </div>
        </summary>
        <div className={styles.content}>
          <div className={styles.tokenBox}>
            <pre className={styles.token}>
              {JSON.stringify(
                {
                  exp: safeToken.exp,
                  iat: safeToken.iat,
                  iss: safeToken.iss,
                  aud: safeToken.aud,
                  sub: safeToken.sub,
                  azp: safeToken.azp,
                  realm_access: safeToken.realm_access,
                },
                null,
                2
              )}
            </pre>
          </div>
          <p className={styles.warning}>
            For demonstration purposes only. Never expose raw tokens in
            production UIs.
          </p>
        </div>
      </details>
    </div>
  );
}
