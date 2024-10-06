"use client";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { TGUserData } from "@/lib/types";
import WebApp from "@twa-dev/sdk";

interface UserContextType {
  userData: TGUserData | null;
  setUserData: (user: TGUserData | null) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<TGUserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect (() => {
    if (typeof window !== "undefined" && WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as TGUserData);
      setLoading(false);
    }
  } , []);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
