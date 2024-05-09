import React from "react";
import Swap from "./Swap";

const SelectNetwork = () => {
  return (
    <div className="relative bg-purple-300 min-h-screen flex items-start justify-start">
      <div className="absolute top-0 left-0 m-6">
        <h1 className="text-5xl text-purple-800 font-bold">Meta Swap</h1>
      </div>
      <Swap />
    </div>
  );
};

export default SelectNetwork;
