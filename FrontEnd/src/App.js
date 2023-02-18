import "./index.css";

//Components
import Navbar from "./Components/Navbar/indeex";
import CoinsData from "./Components/CoinsData/CoinsData";

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar />
      </div>
      <main className='mainApp'>
        <CoinsData />
      </main>
    </>
  );
};

export default App;
