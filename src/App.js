import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/sign-up' element={<Signup/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>

        <Route path='/cart' element={<Cart/>}></Route>
       </Routes>
      
    </div>   
  );
}

export default App;
