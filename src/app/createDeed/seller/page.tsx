"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Copy,
  Info,
  Plus,
  PlusIcon,
  Send,
  XIcon,
} from "lucide-react";
import { useState } from "react";

function createDeedSeller() {
  const [deed, setDeed] = useState("");
  const [isOneTime, setIsOneTime] = useState(true);
  const [modeOfPayment, setModeOfPayment] = useState<string | null>("");
  const [expectedTimeOfCompletion, setExpectedTimeOfCompletion] = useState<
    string | null
  >("");
  const [isDeedSaved, setIsDeedSaved] = useState(false);
  const [mileStones, setMileStones] = useState({});
  return !isDeedSaved ? (
    <div className="h-screen w-screen flex flex-col items-start justify-start bg-[#F8F8F8] p-6 overflow-x-hidden gap-y-5">
      <header className="text-[#484848] font-bold text-lg">
        <h1>Create a Deed</h1>
      </header>
      <div className="flex flex-col justify-center gap-y-3 w-full">
        {/* deed form  */}
        <div className="text-[#5D5D5D]">
          <p>What your deed is about?</p>
        </div>
        <div className="flex p-2 justify-center items-center w-full bg-[#FFFFFF] border-[#C4C4C4] border-2 rounded-md">
          <input
            type="text"
            className="rounded-md outline-none w-full"
            placeholder="Title"
            onChange={(e) => setDeed(e.target.value)}
            value={deed}
          />
          <div
            onClick={() => {
              setDeed("");
            }}
          >
            <XIcon className="w-5 h-5 text-[#5D5D5D]" />
          </div>
        </div>
        <div>
          <textarea
            className="p-2 rounded-md outline-none border-[#C4C4C4] border-2 w-full"
            placeholder="Description"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        <div className="text-[#5D5D5D]">
          <p>How the payment will be distributed?</p>
        </div>
        <div className="flex justify-center items-center w-full gap-2">
          <Button
            className={
              isOneTime
                ? `bg-[#DFEFFF] border-[#52B9FF] text-[#52B9FF] border-2 w-1/2 hover:bg-[#DFEFFF] hover:border-[#52B9FF] hover:text-[#52B9FF]`
                : `bg-[#FFFFFF] border-[#52B9FF] text-[#52B9FF] border-2 w-1/2 hover:bg-[#DFEFFF] hover:border-[#52B9FF] hover:text-[#52B9FF]`
            }
            onClick={() => setIsOneTime(true)}
          >
            One Time
          </Button>
          <Button
            className={
              !isOneTime
                ? `bg-[#DFEFFF] border-[#52B9FF] text-[#52B9FF] border-2 w-1/2 hover:bg-[#DFEFFF] hover:border-[#52B9FF] hover:text-[#52B9FF]`
                : `bg-[#FFFFFF] border-[#52B9FF] text-[#52B9FF] border-2 w-1/2 hover:bg-[#DFEFFF] hover:border-[#52B9FF] hover:text-[#52B9FF]`
            }
            onClick={() => setIsOneTime(false)}
          >
            Milestones
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 w-full">
        <div className="text-[#5D5D5D]">
          <p>Further Details about the deed</p>
        </div>
        <div className="flex flex-col gap-y-2 items-center justify-center w-full">
          <div className="w-full bg-[#FFFFFF] rounded-md p-2 border-[#C4C4C4] border-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full flex items-center justify-center">
                {modeOfPayment ? (
                  <div className="w-[80%] flex justify-start items-center text-black text-sm">
                    <p>{modeOfPayment}</p>
                  </div>
                ) : (
                  <div className="w-[80%] flex justify-start items-center text-[#C4C4C4] text-sm">
                    <p>Mode Of Payment</p>
                  </div>
                )}
                <div className="w-[20%] flex justify-end items-center">
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuItem
                  onClick={(e) => {
                    setModeOfPayment(e?.currentTarget?.textContent);
                  }}
                >
                  UPI
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    setModeOfPayment(e?.currentTarget?.textContent);
                  }}
                >
                  Crypto
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    setModeOfPayment(e?.currentTarget?.textContent);
                  }}
                >
                  Net Banking
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    setModeOfPayment(e?.currentTarget?.textContent);
                  }}
                >
                  Etc
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {!isOneTime && (
            <div className="flex p-2 w-full items-center bg-[#FFFFFF] border-[#C4C4C4] border-2 rounded-md">
              <input
                type="text"
                className="rounded-md w-full outline-none text-sm text-[#C4C4C4]"
                placeholder="Milestone"
              />
            </div>
          )}
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
        {!isOneTime && (
          <div className="w-full flex justify-center items-center">
            <Button className="bg-[#FFFFFF] text-black w-full border-2 border-[#EDEDED] flex justify-center items-center gap-2 hover:bg-white">
              <p className="text-[#5D5D5D]">Add Another Milestone</p>
              <PlusIcon className="w-4 h-4 text-[#5D5D5D]" />
            </Button>
          </div>
        )}
      </div>
      <div className="w-full min-h-[120px]">
        {/* Save deed */}
        <Button
          className="bg-[#52B9FF] text-[#FFFFFF] w-full"
          onClick={() => {
            setIsDeedSaved(true);
          }}
        >
          Save Deed
        </Button>
      </div>
    </div>
  ) : (
    <div className="h-screen w-screen flex flex-col items-start justify-start bg-[#F8F8F8] p-4 overflow-x-hidden gap-y-5">
      <div className="flex flex-col justify-center gap-y-2">
        {/* Header */}
        <div className="text-[#52B9FF] text-sm font-bold">
          <p>ID: 3kh4kh21</p>
        </div>
        <header className="text-[#484848] text-lg font-bold">
          <h1>{deed ? deed : "Escrowed Telegram Mini App"}</h1>
        </header>
        <div className="text-sm text-[#5D5D5D]">
          <p>
            This will be a simple escrow app made for telegram app store. This
            will allow users to create escrow...{" "}
            <span className="text-[#52B9FF] underline">Read more</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center p-2 bg-[#DFEFFF] w-full rounded-md">
        <div className="flex gap-2 text-xs items-center justify-center">
          <Info className="text-[#52B9FF]" />
          <p className="text-[#5D5D5D] font-bold">Project Status</p>
        </div>
        <div className="text-xs text-[#5D5D5D]">
          <p>Seller Allocation Pending</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 w-full">
        {/* Deed Details */}
        <div>
          <h1 className="text-[#484848] font-bold">Deed Info Summary</h1>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <div className="w-full flex justify-between text-[#5D5D5D]">
            <p>Deed Buyer</p>
            <p className="text-[#52B9FF]">You(34 Plebi)</p>
          </div>
        </div>
        <div className="p-[0.5px] bg-[#EDEDED]"></div>

        <div className="w-full flex flex-col gap-y-2">
          <div className="w-full flex justify-between text-[#5D5D5D]">
            <p>Payment Distribution Type</p>
            <p className="text-[#52B9FF]">One Time</p>
          </div>
        </div>
        <div className="p-[0.5px] bg-[#EDEDED]"></div>

        <div className="w-full flex flex-col gap-y-2">
          <div className="w-full flex justify-between text-[#5D5D5D]">
            <p>Deed Completion Time</p>
            <p className="text-[#52B9FF]">4.5 weeks</p>
          </div>
        </div>
        <div className="p-[0.5px] bg-[#EDEDED]"></div>

        <div className="w-full flex flex-col gap-y-2">
          <div className="w-full flex justify-between text-[#5D5D5D]">
            <p>Total Deed Amount</p>
            <p className="text-[#52B9FF]">$1200</p>
          </div>
        </div>
        <div className="p-[0.5px] bg-[#EDEDED]"></div>
      </div>

      {mileStones && (
        <div className="flex flex-col gap-y-3 w-full">
          {/* Deed Details */}
          <div>
            <h1 className="text-[#484848] font-bold">Milestones</h1>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <div className="w-full flex justify-between text-[#5D5D5D]">
              <p>Deed Buyer</p>
              <p className="text-[#52B9FF]">You(34 Plebi)</p>
            </div>
          </div>
          <div className="p-[0.5px] bg-[#EDEDED]"></div>

          <div className="w-full flex flex-col gap-y-2">
            <div className="w-full flex justify-between text-[#5D5D5D]">
              <p>Payment Distribution Type</p>
              <p className="text-[#52B9FF]">One Time</p>
            </div>
          </div>
          <div className="p-[0.5px] bg-[#EDEDED]"></div>

          <div className="w-full flex flex-col gap-y-2">
            <div className="w-full flex justify-between text-[#5D5D5D]">
              <p>Deed Completion Time</p>
              <p className="text-[#52B9FF]">4.5 weeks</p>
            </div>
          </div>
          <div className="p-[0.5px] bg-[#EDEDED]"></div>

          <div className="w-full flex flex-col gap-y-2">
            <div className="w-full flex justify-between text-[#5D5D5D]">
              <p>Total Deed Amount</p>
              <p className="text-[#52B9FF]">$1200</p>
            </div>
          </div>
          <div className="p-[0.5px] bg-[#EDEDED]"></div>
        </div>
      )}
      <div className="w-full flex gap-2">
        {/* Share */}
        <div className="w-1/2">
          <Button className="w-full bg-[#52B9FF] flex justify-center items-center gap-2">
            <Send className="text-[#FFFFFF] text-sm" />
            Share
          </Button>
        </div>
        <div className="w-1/2">
          <Button className="w-full bg-[#DFEFFF] text-[#52B9FF] flex justify-center items-center gap-2 border-[#52B9FF] border-2">
            <Copy className="text-[#52B9FF]" />
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
}

export default createDeedSeller;
