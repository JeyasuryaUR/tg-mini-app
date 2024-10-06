"use client";
import { ReactNode } from "react";
import Footer from "./Footer";
import { UserProvider } from "@/context/UserContext";

const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <UserProvider>
      {children}
      <Footer />
    </UserProvider>
  );
};

export default ClientWrapper;
