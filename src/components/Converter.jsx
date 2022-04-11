import { useEffect, useState } from 'react';
import Axios from 'axios';


export default function Converter() {
  const [amount, setAmount] = useState(1000);
  const [uahRate, setUahRate] = useState(31.9);
  const [eurRate, setEurRate] = useState(32.7);
  const [usdtRate, setUsdtRate] = useState(0.95);
  const [profit, setProfit] = useState(-1);
  const [profitPct, setProfitPct] = useState(0);

   // Calling the api whenever the dependency changes
  //  useEffect(() => {
  //    Axios.get(
  //  `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
  //  .then((res) => {
  //    setInfo(res.data[from]);
  //    })
  //  }, [from]);

  useEffect(() => {
    calculateProfit();
  }, [amount, uahRate, eurRate, usdtRate])

  //  // Function to convert the currency
  //  function convert() {
  //    var rate = info[to];
  //    setOutput(input * rate);

  //   }


  function calculateProfit() {
    let initialUah = amount * uahRate;
    console.log('We have', initialUah, 'uah for selling', amount, 'usdt');

    let eurNeeded = amount * usdtRate;
    console.log('We need', eurNeeded, 'eur to buy back', amount, 'usdt');

    let spentUah = eurNeeded * eurRate;
    console.log('We are buying', eurNeeded, 'for total', spentUah);

    console.log('We are buying back', amount, 'usdt for eur', eurNeeded);
    console.log('We are buying back', amount, 'usdt for uah', spentUah);

    let profit = (initialUah - spentUah).toFixed(2);
    console.log('We are having profit', profit);
    setProfit(profit);
  }
   // Function to switch between two currency
  //  function flip() {
  //    var temp = from;
  //    setFrom(to);
  //    setTo(temp);
  //  }
  return (
  <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
      <nav className="space-y-1">
        <a href="#" className="bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium" aria-current="page">
          <svg className="text-indigo-500 group-hover:text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="truncate"> Account </span>
        </a>

        <a href="#" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
          <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <span className="truncate">Transactions</span>
        </a>

        <a href="#" className="text-gray-900 hover:text-gray-900 hover:bg-gray-50 group rounded-md px-3 py-2 flex items-center text-sm font-medium">
          <svg className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
          </svg>
          <span className="truncate">History</span>
        </a>
      </nav>
    </aside>

    <div className="space-y-6 sm:px-6 lg:px-0 col-span-6">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Profit calculator</h3>
            <p className="mt-1 text-sm text-gray-500">Enter current amount and rates to calculate projected profit.</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1">
              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">Enter initial amount</label>
              <div className="mt-1 rounded-md shadow-sm flex">
                <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">USDT</span>
                <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}} min="100" step="10" className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"/>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Binance USDT/UAH rate</label>
              <div className="mt-1 flex items-center">
                <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-8 w-8">
                  <img src="./src/img/usdt.png" />
                </span>
                /
                <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-7 w-7 ml-1">
                  <img src="./src/img/uah.png" />
                </span>
                <div className="mt-1 rounded-md shadow-sm flex pl-2">
                  <input type="number" value={uahRate} onChange={(e) => {setUahRate(e.target.value)}} className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300" />
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">Binance P2P rate to sell ₮ for ₴</p>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Monobank EUR/UAH rate</label>
              <div className="mt-1 flex items-center">
                <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-7 w-7 mr-1">
                  <img src="./src/img/eur.png"/>
                </span>
                /
                <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-7 w-7 ml-1">
                  <img src="./src/img/uah.png" />
                </span>
                <div className="mt-1 rounded-md shadow-sm flex pl-2">
                  <input type="number" value={eurRate} onChange={(e) => {setEurRate(e.target.value)}} className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"/>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">Monobank rate to buy € for ₴</p>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Binance EUR/USDT rate</label>
              <div className="mt-1 flex items-center">
                <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-7 w-7 mr-1">
                  <img  src="./src/img/eur.png" />
                </span>
                /
                <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-8 w-8">
                  <img  src="./src/img/usdt.png" />
                </span>
                <div className="mt-1 rounded-md shadow-sm flex pl-2">
                  <input type="number" value={usdtRate} onChange={(e) => {setUsdtRate(e.target.value)}} className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300" />
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-500">Binance P2P rate to buy ₮ for €</p>
            </div>

          </div>
        </div>
        <div className="relative bg-gray-100 p-6 m-4 shadow rounded-lg overflow-hidden">
          <dt>
            <div className="absolute bg-indigo-500 rounded-md p-3">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Final profit</p>
          </dt>
          <dd className="ml-16 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">₴ {profit}</p>
            <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              +{profitPct}%
            </p>
          </dd>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="bg-gray-100 hover:bg-gray-200 border border-black rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Reset
          </button>
          <button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save transaction
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
