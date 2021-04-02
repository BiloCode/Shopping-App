import "styles/globals.css";
import "database";

import { AppProps } from "next/app";
import { AuthProvider } from "context/AuthContext/provider";
import { UserProfileProvider } from "context/UserProfileContext/provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserProfileProvider>
        <Component {...pageProps} />
      </UserProfileProvider>
    </AuthProvider>
  );
}

export default MyApp;
