import "styles/globals.css";
import "database";

import { AppProps } from "next/app";
import { AuthProvider } from "context/AuthContext/provider";
import { ProfileProvider } from "context/ProfileContext/provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ProfileProvider>
        <Component {...pageProps} />
      </ProfileProvider>
    </AuthProvider>
  );
}

export default MyApp;
