import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinItem = ({ coin }) => {
  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td>
        <AiOutlineStar className="ml-2" />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              className="w-8 mr-3 rounded-full"
              src={coin.image}
              alt={coin.id}
            />
            <p className="text-lg hidde sm:table-cell font-semi-bold">
              {coin.name}
            </p>
            <p className="text-lg text-secondary ml-5">
              {coin.symbol.toUpperCase()}
            </p>
          </div>
        </Link>
      </td>
      <td className="text-lg">€{coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600 text-lg">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600 text-lg">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidde sm:table-cell ">
        €{coin.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidde sm:table-cell">
        €{coin.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="grey" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
