import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar/indeex";
import CoinPage from "./Pages/CoinPage";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/coin-page/:id' exact element={<CoinPage />} />
      </Routes>
    </Router>
  );
};

export default App;
