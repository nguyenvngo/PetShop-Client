import { useState,useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {CartContext} from './components/contexts/CartContext'
import Home from './components/home/Home';
import DogsPage from './components/dogs/DogsPage';
import Cart from './components/checkout/Cart';
import Navbar from './navbar/Navbar';
import axios from 'axios';

function App() {

  const [allDogs,setAllDogs] = useState([]);
  const [myCart,addMyCart] = useState([{}]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    
    async function getData() {
        const res = await axios.get("/v1/dogs");
        return res;
    };

    getData().then((res) => setAllDogs(res.data));
    getData().catch((error) => console.log(error));

  }, []); 
  
  return (
    
    <CartContext.Provider value={{myCart, addMyCart, total, setTotal}}>
        <Router>
          <Navbar/>
            <Routes>       
                  <Route path="/" element={<Home />}/>
                  <Route path="/dogs" element={<DogsPage allDogs={allDogs} />}/>
                  <Route path="/checkout" element={<Cart />}/>
            </Routes>
        </Router>
      </CartContext.Provider>
  );
}

export default App;
