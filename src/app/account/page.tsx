"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context/UserContext";
import {
  ChevronRight,
  CircleHelp,
  CornerUpRight,
  Headset,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const MarketPage = () => {
  const { userData } = useUser();
  return (
    <div className="p-4 bg-gray-200 text-black">
      <div className="text-2xl font-bold mb-4">Account</div>
      <div className="flex flex-col items-start justify-start h-[70vh]">
        <div className="flex items-center justify-start gap-3 w-full my-8">
          <Avatar className="w-14 h-14">
            <AvatarImage
              className="h-24 w-24 object-cover"
              src="https://s3-alpha-sig.figma.com/img/206f/7d73/ad181b17fcb71bebb0d89e011174038c?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IHiojlzSMpKk~zY-VGfNozCna4~xIEARzNb9Bx6llJOGjkGGi--H0dbPXKLAhN1DOBdd~-1PfoWyu4VMgg3UDjwD0Kha~7ffBrMbFFtpVuYO~rsZRdMVoLXXDKAuylYW-B3-3L-S1YHM9K4toHaRxAaVWFOfQ~orJ4ohSCwcJO-10Q6vGMG1z2qLbrVR-6D8RMUPT2x5tD4djFYF5YCXyXVtpoZGULSYZ78w7YArc49FnZNJnDZq8pdwoEDcBSbWwUC8jz7TevxPGuZDjxEwp0XT-UsuAKU8cxsMp~Pttz-wmHBQdnHVg5lTaenxuPA5tbD12GMrDxSCEfUHMq-GUg__"
            />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-y-2">
            {/* Username and userid */}
            {userData ? (
              <>
                <div className="text-sm text-[#52B9FF]">{`${userData.first_name} ${userData.last_name}`}</div>
                <div className="text-sm text-[#52B9FF]">
                  {userData.username || userData.id}
                </div>
              </>
            ) : (
              <>
                <div className="text-xl">John Doe</div>
                <div className="text-sm text-[#52B9FF]">Johndoe123</div>
              </>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4 text-[#5D5D5D]">
          <Link href="/faq">
            <div className="flex justify-between p-4 w-full bg-[#FFFFFF] rounded-sm hover:cursor-pointer">
              {/* FAQ */}
              <div className="flex gap-2 justify-center items-center hover:cursor-pointer">
                <CircleHelp />
                <p>Frequently Asked Questions</p>
              </div>
              <div className="flex justify-center items-center">
                <ChevronRight />
              </div>
            </div>
          </Link>
          <div className="flex justify-between p-4 w-full bg-[#FFFFFF] rounded-sm hover:cursor-pointer">
            {/* Suggestion */}
            <div className="flex gap-2 justify-center items-center">
              <Lightbulb />
              <p>Submit a Suggestion</p>
            </div>
            <div className="flex justify-center items-center">
              <ChevronRight />
            </div>
          </div>
          <div className="flex justify-between p-4 w-full bg-[#FFFFFF] rounded-sm hover:cursor-pointer">
            {/* Share App */}
            <div className="flex gap-2 justify-center items-center">
              <CornerUpRight />
              <p>Share App</p>
            </div>
            <div className="flex justify-center items-center">
              <ChevronRight />
            </div>
          </div>
          <div className="flex justify-between p-4 w-full bg-[#FFFFFF] rounded-sm hover:cursor-pointer">
            {/* Contact Support */}
            <div className="flex gap-2 justify-center items-center">
              <Headset />
              <p>Contact Support</p>
            </div>
            <div className="flex justify-center items-center">
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
