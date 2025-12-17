"use client";
import { useKeycloak } from "@react-keycloak/web";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function HomePage() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Initializing authentication...</div>;
  }

  const isAuthenticated = !!keycloak?.token;

  return (
    <>
      <Header
        authenticated={isAuthenticated}
        onLogoutClick={() => keycloak.logout()}
        userInfo={keycloak?.tokenParsed}
      />
      <main className="flex-grow flex flex-col items-center w-full">
        <Hero
          authenticated={isAuthenticated}
          onLoginClick={() => keycloak.login({ pkceMethod: "S256" })}
          tokenInfo={keycloak?.tokenParsed}
        />
        <Features />
      </main>
      <Footer />
    </>
  );
}
