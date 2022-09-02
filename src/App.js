import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Protected from './components/Protected';
import SignOut from './components/SignOut';


function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Protected Component = {Home}/>} exact></Route>
        <Route path='/cart' element={<Protected Component={Cart} />}></Route>
        <Route path='/sign-up' element={<Signup/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-out' element={<SignOut />}></Route>
       </Routes>
      
    </div>   
  );
}

export default App;
