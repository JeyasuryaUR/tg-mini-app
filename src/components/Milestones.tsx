"use client";
import { useRef } from "react";

function Milestones(props: { milestone: string; amount: string }) {
  // This component was used to render the radio buttons in the milestones. Takes 2 props: milestone name and amount.
  const radioRef = useRef<HTMLInputElement>(null);
  {
    /* This will tell that the particular elem is checked or not. radioRef?.current?.checked will get you the value. */
  }
  return (
    <div className="w-full flex flex-col gap-y-2">
      <div
        className="w-full flex justify-between text-[#5D5D5D]"
        onClick={() => {
          // This will toggle the radio button
          if (radioRef?.current) {
            if (radioRef?.current?.checked) {
              radioRef.current.checked = false;
            } else {
              radioRef.current.checked = true;
            }
          }
        }}
      >
        <div className="flex gap-1 items-center justify-center">
          <input
            type="radio"
            className="border-[#52B9FF] border-2 outline-none bg-[#52B9FF]"
            ref={radioRef}
          />
          <label>
            {props?.milestone}
            {/* Renders the name of the milestone */}
          </label>
        </div>
        <p className="text-[#52B9FF]">
          ${props?.amount}
          {/* Renders the amount of milestone */}
        </p>
      </div>
      <div className="p-[0.5px] bg-[#EDEDED]">{/* Line */}</div>
    </div>
  );
}

export default Milestones;
