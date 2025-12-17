import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.links}>
            <a
              href="https://www.keycloak.org/documentation"
              className={styles.link}
            >
              Keycloak Documentation
            </a>
            <a
              href="https://github.com/sevketbuyukdemir/oauth2-authorization-code-with-pkce"
              className={styles.link}
            >
              GitHub Repo
            </a>
          </div>
          <p className={styles.copyright}>
            © 2025 AuthFlow Demo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
