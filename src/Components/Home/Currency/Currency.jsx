import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        return setData(res[currency]);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  return data;
}

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex ">
      <div className="w-1/2 ">
        <label htmlFor="myAmount" className="text-black mb-2  inline-block ">
          {label}
        </label>

        <input
          id="myAmount"
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="0.00"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none"
          disabled={currencyDisabled}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const fixedOptions = ["inr", "usd", "btc", "eth", "doge"];
  const filteredOptions = Object.keys(currencyInfo).filter((currency) =>
    fixedOptions.includes(currency)
  );

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  useEffect(() => {
    convert();
  }, [currencyInfo, amount,to,from]);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="w-full mb-3 mx-auto border border-gray-50 rounded-xl p-6 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1 ">
            <Input
              label="Pay"
              amount={amount}
              currencyOptions={filteredOptions}
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
              onCurrencyChange={(currency) => {
                setFrom(currency);
              }}
              selectCurrency={from}
            />
          </div>
          <div className="relative w-full h-1">
            <button
              className="absolute left-1/2 transform -translate-x-1/2 top-[-13px] rounded-lg bg-blue-600 text-white px-3 py-1 font-semibold text-lg"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mb-1 ">
            <Input
              label="Short"
              amount={convertedAmount}
              amountDisabled
              currencyOptions={filteredOptions}
              onCurrencyChange={(currency) => {
                setTo(currency);
              }}
              selectCurrency={to}
            />
          </div>
          
        </form>
      </div>
    </>
  );
}

export default App;
