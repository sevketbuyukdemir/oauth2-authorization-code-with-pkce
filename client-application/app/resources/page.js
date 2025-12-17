"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useKeycloak } from "@react-keycloak/web";

import styles from "./page.module.css";

import Header from "@/components/Header";
import ResourcesHero from "@/components/ResourcesHero";
import ResourceResponseCard from "@/components/ResourceResponseCard";
import ApiDetails from "@/components/ApiDetails";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  const { keycloak, initialized } = useKeycloak();
  const router = useRouter();
  const [resourceData, setResourceData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!keycloak?.token) {
      router.push("/");
      router.refresh();
    }
  }, [keycloak?.token, router]);

  if (!keycloak?.token) {
    return null;
  }

  const isAuthenticated = !!keycloak?.token;
  const tokenInfo = keycloak.tokenParsed;
  const userRole = tokenInfo?.realm_access.roles[0];

  const fetchResourceData = async () => {
    if (!keycloak?.token) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3001/${userRole.toLowerCase()}-resources/secret-resource`,
        {
          headers: {
            Authorization: `Bearer ${keycloak.token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      setResourceData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
          <ResourcesHero
            user={tokenInfo}
            onFetchData={fetchResourceData}
            loading={loading}
            error={error}
          />
          <div className={styles.grid}>
            <div className={styles.profileSection}>
              {resourceData && <ResourceResponseCard data={resourceData} />}
              {error && <div>Error: {error}</div>}
              {!resourceData && !loading && !error && (
                <div>No data fetched yet</div>
              )}
            </div>
            <ApiDetails
              resourceServer="http://localhost:3001"
              api={`/${userRole.toLowerCase()}-resources/secret-resource`}
              token={tokenInfo}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
