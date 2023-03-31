import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const CoinItem = ({ coin }) => {
  function formatValueInBillions(value) {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(1)}B`;
    } else if (value > 100000000 && value < 1000000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value > 10000000 && value < 100000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value > 1000000 && value < 10000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else {
      return `${value.toLocaleString()}`;
    }
  }

  return (
    <tr className="h-[80px]  overflow-hidden">
      <td className="hidden md:table-cell">
        <AiOutlineStar className="ml-2" />
      </td>
      <td className="hidden md:table-cell">{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              className="w-9 mr-3 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
            <p className="text-lg hidde sm:table-cell font-bold">{coin.name}</p>
            <p className="text-lg text-secondary ml-5 hidden md:table-cell">
              {coin.symbol.toUpperCase()}
            </p>
          </div>
        </Link>
      </td>
      <td className="text-lg font-semibold">
        €{coin.current_price.toLocaleString()}
      </td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600 text-lg font-semibold ">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600 text-lg font-semibold ">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[120px] hidden md:table-cell font-lg">
        €{formatValueInBillions(coin.total_volume)}
      </td>
      <td className="w-[120px] hidden md:table-cell font-lg">
        €{formatValueInBillions(coin.market_cap)}
      </td>

      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="orange" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
