import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  const labels = [];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      labels.push(`${daysOfWeek[day]} ${hour}:00`);
    }
  }
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Price",
        data: coin.market_data?.sparkline_7d.price,
        fill: false,
        borderColor: "#5c5cd6",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          display: false,
        },
      },
      y: { grid: { display: false } },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="div-coin my-4  font-bold ">
      <div className="flex py-8 px-2">
        <img className="w-20 mr-8" src={coin.image?.large} alt="/" />
        <div>
          <div className="flex items-center ">
            <p className="text-3xl font-bold">{coin?.name} </p>
            {coin.market_data ? (
              coin.market_data.price_change_percentage_24h > 0 ? (
                <p className="ml-4 text-xl text-green-500">
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : (
                <p className="ml-4 text-xl text-red-500">
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              )
            ) : null}
          </div>
          <p>({coin.symbol?.toUpperCase()} / EUR)</p>
        </div>
      </div>

      <div>
        <div>
          <div className="flex justify-between">
            {coin.market_data?.current_price ? (
              <p className="text-3xl font-bold">
                €{coin.market_data.current_price.eur.toLocaleString()}
              </p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div className="mb-7 mt-5">
            <Line data={data} options={options} />
          </div>
          <div>
            <p className="text-xl font-bold">Market Stats</p>
            <div className="flex justify-between py-4">
              <div>
                <p className="text-gray-500 text-sm">Popularity</p>#
                {coin.market_cap_rank}
              </div>
              <div>
                <p className="text-gray-500 text-sm ">Hashing Algorithm</p>
                {coin.hashing_algorithm ? (
                  <p>{coin.hashing_algorithm}</p>
                ) : null}
              </div>
              <div>
                <p className="text-gray-500 text-sm">Trust Score</p>
                {coin.tickers ? (
                  <p className="text-right">
                    {coin.liquidity_score.toFixed(2)}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex justify-between py-4">
              <div>
                <p className="text-gray-500 text-sm">Price Change (24h)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p className="text-gray-500 text-sm">Price Change (7d)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_7d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p className="text-gray-500 text-sm ">Price Change (14d)</p>
                {coin.market_data ? (
                  <p className="text-right">
                    {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex justify-between py-4">
              <div>
                <p className="text-gray-500 text-sm">Price Change (30d)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p className="text-gray-500 text-sm ">Price Change (60d)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p className="text-gray-500 text-sm text-right">
                  Price Change (1y)
                </p>
                {coin.market_data ? (
                  <p className="text-right">
                    {coin.market_data.price_change_percentage_1y.toFixed(2)}%
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm ">Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm text-right">Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p className="text-right">
                  ${coin.market_data.total_volume.usd.toLocaleString()}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-gray-500 text-sm">24h High</p>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-gray-500 text-sm">24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="py-4  px-2">
        <p className="text-xl font-bold">About {coin.name}</p>
        <p
          className="font-semibold  text-gray-500"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin.description ? coin.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default CoinPage;
