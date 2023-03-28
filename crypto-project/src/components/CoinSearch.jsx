import React, { useState } from "react";
import CoinItem from "./CoinItem";
import { TfiSearch } from "react-icons/tfi";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  const [numToShow, setNumToShow] = useState(10);

  const handleLoadMore = () => {
    setNumToShow(numToShow + 10);
  };

  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2 ml-2">Top coins</h1>
        <form className="relative">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl pl-10"
            type="text"
            placeholder="Search a coin"
          />
          <TfiSearch className="absolute left-3 top-3 text-secondary" />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b text-lg ">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Name</th>
            <th>Price</th>
            <th>Change</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Market cap</th>
            <th>7 days chart</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .slice(0, numToShow)
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>

      {numToShow < coins.length && (
        <div className="w-full mb-[15px] mx-auto mt-2">
          <button
            onClick={handleLoadMore}
            className="w-full my-2 p-3 text-primary rounded-3xl shadow-xl text-lg md:text-xl hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 font-bold dark:bg-[#484848] dark:hover:bg-[#696969]"
          >
            see more
          </button>
        </div>
      )}
    </div>
  );
};

export default CoinSearch;
