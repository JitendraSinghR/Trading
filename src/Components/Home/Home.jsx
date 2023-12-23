import React from "react";
import TradingViewWidget from "./Chart/Chart";
import TradingTable from "./Table";
import Button from "./Button/Button";

function Home() {
  return (
    <div className=" w-full min-h-[1100px]">
      <Button/>

      <TradingViewWidget />
      <TradingTable />
    </div>
  );
}
export default Home;
