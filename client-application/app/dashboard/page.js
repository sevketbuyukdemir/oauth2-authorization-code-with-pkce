"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useKeycloak } from "@react-keycloak/web";

import styles from "./page.module.css";

import Header from "@/components/Header";
import DashboardHero from "@/components/DashboardHero";
import ProfileCard from "@/components/ProfileCard";
import TokenDetails from "@/components/TokenDetails";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  const { keycloak, initialized } = useKeycloak();
  const router = useRouter();

  useEffect(() => {
    if (!keycloak?.token) {
      router.push("/");
      router.refresh(); // Force reload to clear any stale state
    }
  }, [keycloak?.token, router]);

  if (!keycloak?.token) {
    return null; // Don't render anything while redirecting
  }

  const isAuthenticated = !!keycloak?.token;

  const tokenInfo = keycloak.tokenParsed;

  if (!initialized) {
    return <div>Initializing...</div>;
  }

  return (
    <>
      <Header
        authenticated={isAuthenticated}
        onLogoutClick={() => keycloak.logout()}
        userInfo={keycloak?.tokenParsed}
      />
      <main className={styles.main}>
        <div className={styles.container}>
          <DashboardHero user={tokenInfo} />
          <div className={styles.grid}>
            <div className={styles.profileSection}>
              <ProfileCard user={tokenInfo} />
            </div>
            <TokenDetails token={tokenInfo} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
