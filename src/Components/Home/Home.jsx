import React from "react";
import Button from "./Button/button";
import TradingViewWidget from "./Chart/Chart";
import TradingTable from "./Table";

function Home() {
  return (
    <div className=" w-full min-h-[1100px]">
      <Button />

      <TradingViewWidget />
      <TradingTable/>
    </div>
  );
}
export default Home;
