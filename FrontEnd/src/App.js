import "./index.css";

//Components
import Navbar from "./Components/Navbar/indeex";
import CoinsData from "./Components/CoinsData/CoinsData";
import CryptoStatus from "./Components/Status/CryptoStatus";
import CryptoNews from "./News/CryptoNews";
import TheFooter from "./Components/Footer/TheFooter";

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar />
      </div>
      <main className='mainApp'>
        <CryptoStatus />
        <article className='mainArt'>
          <CoinsData />
          <CryptoNews />
        </article>
        <TheFooter />
      </main>
    </>
  );
};

export default App;
