import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
        <Route path='/' components={<Home />} exact></Route>
       </Routes>
      
    </div>   
  );
}

export default App;
