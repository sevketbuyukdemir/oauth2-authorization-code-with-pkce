"use client";

import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";
import "./globals.css";

export default function RootLayout({ children }) {
  const eventLogger = (eventType, error) => {
    console.log("Keycloak event", eventType, error);
  };

  const initOptions = {
    onLoad: false,
    checkLoginIframe: false,
    pkceMethod: "S256",
    enableLogging: true,
  };

  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ReactKeycloakProvider
          authClient={keycloak}
          initOptions={initOptions}
          onEvents={eventLogger}
          LoadingComponent={<div>Loading auth...</div>}
        >
          <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden">
            {children}
          </div>
        </ReactKeycloakProvider>
      </body>
    </html>
  );
}
