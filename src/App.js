import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Components/Shared/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
