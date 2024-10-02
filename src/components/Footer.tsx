import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <nav className="fixed bottom-0 w-full flex justify-around bg-gray-800 text-white py-4">
      <Link href={"/"} className="cursor-pointer">
        Home
      </Link>
      <Link href={"/marketplace"} className="cursor-pointer">
        Marketplace
      </Link>
      <Link href={"/account"} className="cursor-pointer">
        Account
      </Link>
    </nav>
  );
};

export default Footer;
