"use client";

import Link from "next/link";
import { useKeycloak } from "@react-keycloak/web";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header({ authenticated, onLogoutClick, userInfo }) {
  const pathname = usePathname();
  const { keycloak } = useKeycloak();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logoIcon}></div>
          <h2 className={styles.logoText}>AuthFlow Demo</h2>
        </div>

        <div className={styles.rightSection}>
          {authenticated && (
            <nav className={styles.nav}>
              <Link
                href="/"
                className={`${styles.navLink} ${
                  pathname === "/" ? styles.active : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className={`${styles.navLink} ${
                  pathname === "/dashboard" ? styles.active : ""
                }`}
              >
                Dashboard
              </Link>
            </nav>
          )}
          <div className={styles.userSection}>
            {authenticated && userInfo && (
              <>
                <div className={styles.userInfo}>
                  <span className={styles.userName}>
                    {`${userInfo?.given_name} ${userInfo?.family_name}` ||
                      "Demo User"}
                  </span>
                  <span className={styles.userRole}>
                    {userInfo?.realm_access.roles[0] || "USER"}
                  </span>
                </div>
                <div
                  className={styles.avatar}
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4tldJm4sZsi_-FYM9zdBLtOJGXHrPs9RbgCsG6VyAJ1qB98AWlwF4ojprVA5F2ALGnuCk3uFLMdcrsiSKbBILvrQuNXd_rK6clATPqeu4Jm7xzsy6EMW_91VpdoSASb36oHlzfpa98oc1WOU7DMCde7kd8aMO-Cixf5byraf5hC1dxJkLqstqLuBY2LmAbgxbl54mKDoNFsZWQL3WXQFbWVRFNKqTLLx3UAqm6pg75UWwo_-J3G4f-k9dygIa1Hf2dCzDZFjszVnR')",
                  }}
                />
              </>
            )}
            <button
              className={`${styles.logoutBtn} ${
                authenticated ? styles.authenticated : styles.disabled
              }`}
              disabled={!authenticated}
              onClick={onLogoutClick}
            >
              <span className={styles.btnText}>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
