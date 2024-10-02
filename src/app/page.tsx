export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col items-start justify-start bg-gray-200 p-6">
      <div className="flex items-center justify-between w-full mt-4 mb-8">
        <div className="flex items-center justify-center gap-4">
          <div className="bg-gray-400 w-10 h-10 rounded-full"></div>
          <div>
            <p className="text-lg text-gray-400">Hello,</p>
            <p className="text-lg text-black">Martha Johnson</p>
          </div>
        </div>
        <div className="bg-gray-400 w-8 h-8 rounded-full"></div>
      </div>
      <p className="my-6 text-black font-semibold text-xl text-left w-full">
        Your Activity
      </p>
      <div className="my-4 flex flex-col items-center justify-center w-full gap-4">
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="bg-white border-[2px] w-1/2 border-gray-400 rounded py-3 px-2 flex items-center justify-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#52B9FF]"></div>
            <div>
              <p className="text-xs text-gray-400">Active Deeds</p>
              <p className="text-lg text-black">6</p>
            </div>
          </div>
          <div className="bg-white border-[2px] w-1/2 border-gray-400 rounded py-3 px-2 flex items-center justify-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#52B9FF]"></div>
            <div>
              <p className="text-sm text-gray-400">Completed</p>
              <p className="text-lg text-black">0</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="bg-white border-[2px] w-1/2 border-gray-400 rounded py-3 px-2 flex items-center justify-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#52B9FF]"></div>
            <div>
              <p className="text-sm text-gray-400">Total</p>
              <p className="text-lg text-black">6</p>
            </div>
          </div>
          <div className="bg-white border-[2px] w-1/2 border-gray-400 rounded py-3 px-2 flex items-center justify-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-[#52B9FF]"></div>
            <div>
              <p className="text-sm text-gray-400">Total Money</p>
              <p className="text-lg text-black">6</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full my-6">
        <p className="text-xl font-semibold text-black w-full my-4">
          Your Activity
        </p>
        <div className="flex items-center justify-center my-4 w-full text-black gap-3">
          <div className="w-1/4 flex items-center justify-center bg-white border-2 border-gray-400 rounded text-lg px-2">
            Activity
          </div>
          <div className="w-1/4 flex items-center justify-center bg-white border-2 border-gray-400 rounded text-lg px-2">
            Activity
          </div>
          <div className="w-1/4 flex items-center justify-center bg-white border-2 border-gray-400 rounded text-lg px-2">
            Activity
          </div>
          <div className="w-1/4 flex items-center justify-center bg-white border-2 border-gray-400 rounded text-lg px-2">
            Activity
          </div>
        </div>
        <div className="w-full mx-6 border-2 border-gray-200 bg-white rounded h-[120px]"></div>
      </div>
    </div>
  );
}
