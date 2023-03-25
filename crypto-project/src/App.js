import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import axios from "axios";

function App() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=15&page=1&sparkline=true";
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      //console.log(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/" element={<Signin />} />
        <Route path="/" element={<Signup />} />
        <Route path="/" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
