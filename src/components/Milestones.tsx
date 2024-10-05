"use client";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

function Milestones() {
  const [expectedTimeOfCompletion, setExpectedTimeOfCompletion] = useState<
    string | null
  >("");
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="flex p-2 w-full items-center bg-[#FFFFFF] border-[#C4C4C4] border-2 rounded-md">
        <input
          type="text"
          className="rounded-md w-full outline-none text-sm text-[#C4C4C4]"
          placeholder="Milestone"
        />
      </div>
      <div className="flex justify-between p-2 w-full items-center bg-[#FFFFFF] border-[#C4C4C4] border-2 rounded-md">
        <input
          type="text"
          className="rounded-md outline-none text-sm text-[#C4C4C4]"
          placeholder="Amount"
        />
        <p className="text-[#5D5D5D] text-sm text-bold">(USDT)</p>
      </div>
      <div className="w-full bg-[#FFFFFF] rounded-md p-2 px-1 border-[#C4C4C4] border-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full flex items-center justify-center">
            {expectedTimeOfCompletion ? (
              <div className="w-[80%] flex justify-start items-center text-black text-sm">
                <p>{expectedTimeOfCompletion}</p>
              </div>
            ) : (
              <div className="w-[80%] flex justify-start items-center text-[#C4C4C4] text-sm">
                <p>Expected Time of Completion</p>
              </div>
            )}
            <div className="w-[20%] flex justify-end items-center">
              <ChevronDown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            {/* Map here */}
            <DropdownMenuItem
              onClick={(e) => {
                setExpectedTimeOfCompletion(e?.currentTarget?.textContent);
              }}
            >
              1 week
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                setExpectedTimeOfCompletion(e?.currentTarget?.textContent);
              }}
            >
              2 weeks
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                setExpectedTimeOfCompletion(e?.currentTarget?.textContent);
              }}
            >
              3 weeks
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={(e) => {
                setExpectedTimeOfCompletion(e?.currentTarget?.textContent);
              }}
            >
              4 weeks
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default Milestones;
