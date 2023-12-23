import React, { useEffect, useRef, memo, useState } from "react";

function TradingViewWidget() {
  const container = useRef();
  const [symbol, setSymbol] = useState("BINANCE:BTCUSDT");
  const [tradeData, setTradeData] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "${symbol}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;

    if (container.current) {
      container.current.innerHTML = "";
      container.current.appendChild(script);
    }

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [symbol]);
  useEffect(() => {
    const wsSymbol = symbol.replace("BINANCE:", "").toLowerCase();
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${wsSymbol}@trade`
    );
    ws.onmessage = (event) => {
      const tradeData = JSON.parse(event.data);
      setTradeData(parseFloat(tradeData.p).toFixed(2));
    };

    return () => {
      ws.close();
    };
  }, [symbol]);

  return (
    <div className="h-[800px] w-[62%] absolute top-24 right-20">
      <div className="h-[85%]">
        <div className="w-full h-16 bg-gray-600 mb-5 rounded-xl p-3">
          <label htmlFor="cryptoSelect" className="text-gray">
            {" "}
          </label>
          <select
            id="cryptoSelect"
            onChange={(e) => setSymbol(`BINANCE:${e.target.value}USDT`)}
            value={symbol.replace("BINANCE:", "").replace("USDT", "")}
            className="p-1 rounded-lg bg-slate-500 text-white font-semibold text-2xl"
          >
            <option value="BTC">BTC/USD</option>
            <option value="ETH">ETH/USD</option>
            <option value="EUR">EUR/USD</option>
            <option value="AUD">AUD/USD</option>
          </select>
          <div className="text-center absolute ml-44 top-4">
            <p className=" text-2xl text-white font-semibold">${tradeData}</p>
          </div>
        </div>
        <div
          className="tradingview-widget-container"
          ref={container}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
