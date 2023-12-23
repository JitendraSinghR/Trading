import React, { useState } from "react";

const TradingPosition = () => {
  const [entryPrice, setEntryPrice] = useState(43644.43);
  const [leverage, setLeverage] = useState("-");
  const [availableLiquidity, setAvailableLiquidity] = useState(250000.0);

  return (
    <div >
      <div className="flex justify-between text-xl font-semibold text-white p-2">
        <h2>Collateral In</h2>
        <p>USDC.e</p>
      </div>

      <div className="flex justify-between text-xl font-semibold text-white p-2">
        <h2>Leverage</h2>
        <p>{leverage}</p>
      </div>
      <div className="flex justify-between text-xl font-semibold text-white p-2">
        <h2>Entry Price</h2>
        <p>${entryPrice.toFixed(2)}</p>
      </div>

      <div className="flex justify-between text-xl font-semibold text-white p-2">
        {" "}
        <h2>Liq. Price</h2>
        <p>-</p>
      </div>

      <div className="flex justify-between text-xl font-semibold text-white p-2">
        <h2>Open Fees</h2>
        <p>-</p>
      </div>

      <div className="flex justify-between text-xl font-semibold text-white p-2">
        {" "}
        <h2>Dynamic Fees</h2>
        <p>0.0004% / 1h</p>
      </div>

      <div className="flex justify-between text-xl font-semibold text-white p-2">
        <h2>Available Liquidity</h2>
        <p>${availableLiquidity.toFixed(2)}</p>
      </div>
      <button className="bg-blue-500 p-2 w-full rounded-2xl font-semibold text-2xl text-white hover:bg-blue-700 mt-4 mb-4">Connect Wallet</button>
    </div>
    
  );
};

export default TradingPosition;
