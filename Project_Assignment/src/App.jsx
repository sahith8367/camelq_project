import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Grocery from './pages/Grocery/Grocery';
import Shopping from './pages/Shopping/Shopping';
import Transport from './pages/Transport/Transport';
import Login from './pages/Login/Login';
import Signin from './pages/Signin/Signin';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/grocery" element={<Grocery/>}/>
        <Route path='/shopping' element={<Shopping/>}></Route>
        <Route path='/transport' element={<Transport/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </>
  )
}

export default App
