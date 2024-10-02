// import Image from "next/image";
import React from "react";

const MarketPage = () => {
  return (
    <div className="p-4 bg-gray-200 text-black">
      <div className="text-2xl font-bold mb-4">Account</div>
      <div className="flex flex-col items-start justify-start h-[70vh]">
        <div className="flex items-center justify-start gap-3 w-full my-8">
          <div
            //   src="https://via.placeholder.com/150"
            //   alt="Profile"
            className="rounded-full w-10 h-10 bg-black"
          />
          <div className="text-xl">John Doe</div>
        </div>
        <div className="w-full">
          <div className="text-lg font-bold mb-2">FAQ</div>
          <ul className="list-disc list-inside">
            <li>How do I change my password?</li>
            <li>How do I update my profile information?</li>
            <li>How do I delete my account?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
