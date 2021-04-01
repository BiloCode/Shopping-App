import { FC, useEffect, useState } from "react";
import firebase from "firebase";

import { AuthContext } from "./context";

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const auth = firebase.auth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(() => {});
      } else {
        setUser(() => null);
      }

      setIsLoading(() => false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
