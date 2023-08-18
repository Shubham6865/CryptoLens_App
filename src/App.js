import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Coins from "./Components/Coins";
import CoinDetails from "./Components/CoinDetails";
import Exchanges from "./Components/Exchanges";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
<Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/coins" element={<Coins/>}/>
          <Route path="/coin/:id" element={<CoinDetails/>}/>
          <Route path="/exchanges" element={<Exchanges/>}/>
        </Routes>
        <Footer/>
        
      </Router>
    </div>
  );
}

export default App;
