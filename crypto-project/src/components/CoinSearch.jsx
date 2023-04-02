import React, { useState, useEffect } from "react";
import CoinItem from "./CoinItem";
import { FaSearch } from "react-icons/fa";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  const [numToShow, setNumToShow] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(!coins);
  }, [coins]);

  const handleLoadMore = () => {
    setNumToShow(numToShow + 10);
  };

  return (
    <div className="div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-black my-2 ml-2 hidden md:table-cell">
          Top coins
        </h1>
        <form className="relative ">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl pl-10 hover:bg-secondary"
            type="text"
            placeholder="Search a coin"
          />
          <FaSearch className="absolute left-3 top-3 text-secondary text-xl" />
        </form>
      </div>{" "}
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <h2 className="text-2xl font-bold animate-pulse">Loading...</h2>
        </div>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className=" text-lg text-secondary ">
              <th className="px-4 hidden md:table-cell">#</th>
              <th className="text-left hidden md:table-cell">Name</th>
              <th className="hidden md:table-cell">Price</th>
              <th className="text-center hidden md:table-cell">Change</th>
              <th className="hidden md:table-cell">24h Volume</th>
              <th className="hidden md:table-cell">Market cap</th>
              <th className="hidden md:table-cell">Chart</th>
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
      )}
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
