import React from "react";

const SelectNetwork = () => {
  return (
    <div className="relative bg-purple-300 min-h-screen flex items-start justify-start">
      <div className="absolute top-0 left-0 m-6">
        <h1 className="text-5xl text-purple-800 font-bold">Meta Swap</h1>
      </div>
      <div className="bg-purple-900 w-[556px] rounded-[12px] p-[40px] mt-[250px] m-auto">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-white">Switch Network</p>
          <button>
            {/* <FaTimes className="text-[red] cursor-pointer" /> */}
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {/* {networks.map((network, i) => ( */}
          <button
            // onClick={() => setNetwork(i, network)}
            className="border-[#191D24] flex items-center gap-2 px-4 py-2 rounded-[12px] border hover:border-[#3D6EFF] text-white"
            // key={i}
          >
            {/* <img className="h-5" src={network.img} alt={network.name} /> */}
            <p>Network Name Mainnet</p>
          </button>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default SelectNetwork;
