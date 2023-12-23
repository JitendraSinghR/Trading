import React, { useState } from "react";
import "./Button.css";
import CurrencySelector from "../Currency/Currency";
import TradingPosition from "../TradingPosition";

const Button = ({ className = "" }) => {
  const [selectedButton, setSelectedButton] = useState("long");
  const [type, setType] = useState("market");

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  const handleType = (type) => {
    setType(type);
  };
  return (
    <div className={`w-[30%] bg-gray-500 rounded-2xl p-1 m-4 ${className}`}>
      {/* button start */}
      <div className="flex items-center space-x-4 bg-gray-400 w-[90%] rounded-3xl m-7 ">
        <button
          className={`button ${selectedButton === "long" ? "active" : ""}`}
          onClick={() => handleButtonClick("long")}
        >
          Long
        </button>
        <button
          className={`button ${selectedButton === "short" ? "active" : ""}`}
          onClick={() => handleButtonClick("short")}
        >
          Short
        </button>
        <button
          className={`button ${selectedButton === "swap" ? "active" : ""}`}
          onClick={() => handleButtonClick("swap")}
        >
          Swap
        </button>
      </div>
      <div className="flex items-center space-x-4 bg-gray-400 w-[90%] rounded-3xl m-7">
        <button
          className={`button ${type === "market" ? "active" : ""}`}
          onClick={() => handleType("market")}
        >
          Market
        </button>
        <button
          className={`button ${type === "limit" ? "active" : ""}`}
          onClick={() => handleType("limit")}
        >
          Limit
        </button>
      </div>
      {/* button ends */}
      <CurrencySelector />
      <TradingPosition/>
    </div>
  );
};

export default Button;
