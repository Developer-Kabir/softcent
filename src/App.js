import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Components/Shared/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Footer from './Components/Shared/Footer';
import WhatWeDo from './Components/Pages/WhatWeDo';
import Products from './Components/Pages/Products';
import Pricing from './Components/Pages/Pricing';
import TalkAboutUs from './Components/Pages/TalkAboutUs';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/work' element={<WhatWeDo></WhatWeDo>}></Route>
        <Route path='/testiomonal' element={<TalkAboutUs></TalkAboutUs>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
