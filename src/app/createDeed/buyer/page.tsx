"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";

function CreateFee() {
  const [deed, setDeed] = useState("");
  const [isOneTime, setIsOneTime] = useState(true); // This will check if the deed is one time or has milestones
  const [modeOfPayment, setModeOfPayment] = useState<string | null>("");
  const [description, setDescription] = useState("");
  const [mileStones, setMileStones] = useState([
    // Focus on this object to fetch the changes.
    { id: 0, milestone: "", amount: "0", expectedTime: "" }, // This is the initial state of milestone
  ]);

  function addMilestone() {
    // This function will add a new milestone (Function for add new milestone button)
    setMileStones((prev) => [
      ...prev,
      { id: prev.length, milestone: "", amount: "0", expectedTime: "" },
    ]);
  }

  return (
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
            onChange={(e) => setDescription(e.target.value)}
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
                    {/* If mode of payment is selected this will diplay it */}
                    <p>{modeOfPayment}</p>
                  </div>
                ) : (
                  <div className="w-[80%] flex justify-start items-center text-[#C4C4C4] text-sm">
                    {/* If not selected it'll just display mode of payment */}
                    <p>Mode Of Payment</p>
                  </div>
                )}
                <div className="w-[20%] flex justify-end items-center">
                  <ChevronDown />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {/* Map here for dropdown menu options if you want to. */}
                <DropdownMenuItem
                  onClick={(e) => {
                    setModeOfPayment(e?.currentTarget?.textContent); // This sets the mode of payment variable
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
          {!isOneTime && // This will render the milestones. It uses the milestone index to map through the milestones and updates it. You can also use milestone id if you want.
            mileStones.map((val, ind) => (
              <div className="flex flex-col gap-y-2 w-full" key={val?.id}>
                <div className="flex p-2 w-full items-center bg-[#FFFFFF] border-[#C4C4C4] border-2 rounded-md">
                  <input
                    type="text"
                    className="rounded-md w-full outline-none text-sm text-[#C4C4C4]"
                    placeholder="Milestone"
                    onChange={(e) => {
                      setMileStones((prev) => {
                        const newMilestones = [...prev];
                        newMilestones[ind].milestone = e.target.value;
                        return newMilestones;
                      });
                    }}
                  />
                </div>
                <div className="flex justify-between p-2 w-full items-center bg-[#FFFFFF] border-[#C4C4C4] border-2 rounded-md">
                  <input
                    type="text"
                    className="rounded-md outline-none text-sm text-[#C4C4C4]"
                    placeholder="Amount"
                    onChange={(e) => {
                      setMileStones((prev) => {
                        const newMilestones = [...prev];
                        newMilestones[ind].amount = e.target.value; // Change the ind here to ind. To change it to index
                        return newMilestones;
                      });
                    }}
                  />
                  <p className="text-[#5D5D5D] text-sm text-bold">(USDT)</p>
                </div>
                <div className="w-full bg-[#FFFFFF] rounded-md p-2 px-1 border-[#C4C4C4] border-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="w-full flex items-center justify-center">
                      {mileStones[ind].expectedTime !== "" ? (
                        <div className="w-[80%] flex justify-start items-center text-black text-sm">
                          <p>{mileStones[ind].expectedTime}</p>
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
                      {/* Map here. Map the DropdownMenuItem */}
                      <DropdownMenuItem
                        onClick={(e) => {
                          // This will update the expected time of completion dropdown.
                          setMileStones((prev) => {
                            const newMilestones = [...prev];
                            newMilestones[ind].expectedTime =
                              e.currentTarget.textContent || "";
                            return newMilestones;
                          });
                        }}
                      >
                        1 week
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(e) => {
                          setMileStones((prev) => {
                            const newMilestones = [...prev];
                            newMilestones[ind].expectedTime =
                              e.currentTarget.textContent || "";
                            return newMilestones;
                          });
                        }}
                      >
                        2 weeks
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(e) => {
                          setMileStones((prev) => {
                            const newMilestones = [...prev];
                            newMilestones[ind].expectedTime =
                              e.currentTarget.textContent || "";
                            return newMilestones;
                          });
                        }}
                      >
                        3 weeks
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={(e) => {
                          setMileStones((prev) => {
                            const newMilestones = [...prev];
                            newMilestones[ind].expectedTime =
                              e.currentTarget.textContent || "";
                            return newMilestones;
                          });
                        }}
                      >
                        4 weeks
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          {isOneTime && ( // Will only update the first milestone if it's one time
            <>
              <div className="flex justify-between p-2 w-full items-center bg-[#FFFFFF] border-[#C4C4C4] border-2 rounded-md">
                <input
                  type="text"
                  className="rounded-md outline-none text-sm text-[#C4C4C4]"
                  placeholder="Amount"
                  onChange={(e) => {
                    setMileStones((prev) => {
                      const newMilestones = [...prev];
                      newMilestones[0].amount = e.target.value;
                      return newMilestones;
                    });
                  }}
                />
                <p className="text-[#5D5D5D] text-sm text-bold">(USDT)</p>
              </div>
              <div className="w-full bg-[#FFFFFF] rounded-md p-2 px-1 border-[#C4C4C4] border-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full flex items-center justify-center">
                    {mileStones[0].expectedTime !== "" ? (
                      <div className="w-[80%] flex justify-start items-center text-black text-sm">
                        <p>{mileStones[0].expectedTime}</p>
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
                  <DropdownMenuContent
                    className="w-full"
                    onChange={(e) => {
                      setMileStones((prev) => {
                        const newMilestones = [...prev];
                        newMilestones[0].expectedTime =
                          e.currentTarget.textContent || "";
                        return newMilestones;
                      });
                    }}
                  >
                    {/* Map here */}
                    <DropdownMenuItem
                      onClick={(e) => {
                        setMileStones((prev) => {
                          const newMilestones = [...prev];
                          newMilestones[0].expectedTime =
                            e.currentTarget.textContent || "";
                          return newMilestones;
                        });
                      }}
                    >
                      1week
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        setMileStones((prev) => {
                          const newMilestones = [...prev];
                          newMilestones[0].expectedTime =
                            e.currentTarget.textContent || "";
                          return newMilestones;
                        });
                      }}
                    >
                      2weeks
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        setMileStones((prev) => {
                          const newMilestones = [...prev];
                          newMilestones[0].expectedTime =
                            e.currentTarget.textContent || "";
                          return newMilestones;
                        });
                      }}
                    >
                      3weeks
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={(e) => {
                        setMileStones((prev) => {
                          const newMilestones = [...prev];
                          newMilestones[0].expectedTime =
                            e.currentTarget.textContent || "";
                          return newMilestones;
                        });
                      }}
                    >
                      4weeks
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </>
          )}
        </div>
        {!isOneTime && (
          <div className="w-full flex justify-center items-center">
            <Button
              className="bg-[#FFFFFF] text-black w-full border-2 border-[#EDEDED] flex justify-center items-center gap-2 hover:bg-white"
              onClick={addMilestone}
            >
              <p className="text-[#5D5D5D]">Add Another Milestone</p>
              <PlusIcon className="w-4 h-4 text-[#5D5D5D]" />
            </Button>
          </div>
        )}
      </div>
      <div className="w-full min-h-[120px]">
        {/* Save deed */}
        <Button className="bg-[#52B9FF] text-[#FFFFFF] w-full">
          Save Deed
        </Button>
      </div>
    </div>
  );
}

export default CreateFee;
