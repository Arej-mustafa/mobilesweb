
import './App.css';
import {Route,Routes} from "react-router-dom"

import Home from './Dashbord/Home';
import MemoryStorage from './Dashbord/MemoryStorage';
import Accessories from './Dashbord/Accessories';
import Shop from './Dashbord/Shop';
import Android from './Dashbord/Android';




function App() {
  return (
    <div className="App">
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />
           <Route path="shop" element={<Shop/>} />
           <Route path="accessoires" element={<Accessories />} />
           <Route path="andriod" element={<Android />} />
           <Route path="memorystorge" element={<MemoryStorage />} />
      </Routes>


    </div>
  );
}

export default App;
