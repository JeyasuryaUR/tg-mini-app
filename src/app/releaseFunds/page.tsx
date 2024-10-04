import { Button } from "@/components/ui/button";

function ReleaseFunds() {
  return (
    <div className="h-screen w-screen flex flex-col items-start justify-start bg-[#F8F8F8] p-4 overflow-x-hidden gap-y-8">
      <div className="flex flex-col justify-center gap-y-2">
        {/* Header */}
        <header className="text-[#484848] text-lg font-bold">
          <h1>Release Funds</h1>
        </header>
      </div>
      <div className="flex flex-col gap-y-3 w-full">
        <div>
          <h1 className="text-[#484848] font-bold">Release Funds for</h1>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <div className="w-full flex justify-between text-[#5D5D5D]">
            <div className="flex gap-1 items-center justify-center">
              <input
                type="radio"
                className=" border-[#52B9FF] border-2 outline-none bg-[#52B9FF]"
              />
              <label>Complete Project</label>
            </div>
            <p className="text-[#52B9FF]">$1200</p>
          </div>
        </div>
        <div className="p-[0.5px] bg-[#EDEDED]"></div>
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
      <div className="w-full flex gap-2">
        {/* Share */}
        <div className="w-full">
          <Button className="w-full bg-[#52B9FF] flex justify-center items-center gap-2">
            Release Funds
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ReleaseFunds;
