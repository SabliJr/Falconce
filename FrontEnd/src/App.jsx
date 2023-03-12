import React, { useContext } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { dataContext } from "./Context/GlobalDataProvider";

//Components
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/index";
import CoinPage from "./Pages/CoinPage";
import Loader from "./Loader";
import SearchData from "./Components/Navbar/SearchData";

const App = () => {
  const { isLoading } = useContext(dataContext);

  return isLoading ? (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <SearchData />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/coin-page/:id' exact element={<CoinPage />} />
      </Routes>
    </Router>
  ) : (
    <Loader />
  );
};

export default App;
