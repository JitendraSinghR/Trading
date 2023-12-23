import React from "react";

const TradingTable = () => {

  return (
    <div className=" bg-gray-600 w-[1400px] h-auto ml-20 rounded-xl min-h-[200px]">
      <ul className="flex justify-between p-2 text-white font-semibold mx-6">
        <li>Position</li>
        <li>Net Value</li>
        <li>Size</li>
        <li>Collateral</li>
        <li>Entry Price</li>
        <li>Mark Price</li>
        <li>Liq. Price</li>
      </ul>
      <hr className="w-[90%] h-1 bg-gray-400 ml-16 rounded-2xl" />
      <p className="text-white text-xl font-semibold m-5">No open position </p>
    </div>
  );
};

export default TradingTable;
