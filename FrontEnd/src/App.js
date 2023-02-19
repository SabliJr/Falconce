import "./index.css";

//Components
import Navbar from "./Components/Navbar/indeex";
import CoinsData from "./Components/CoinsData/CoinsData";
import CryptoStatus from "./Components/Status/CryptoStatus";

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar />
      </div>
      <main className='mainApp'>
        <CryptoStatus />
        <CoinsData />
      </main>
    </>
  );
};

export default App;
