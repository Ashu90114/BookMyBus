import React from "react";
import './App.css';
import Home from "./Pages/Home";
import Boffers from "./Pages/Boffers";
import { Login } from "./Pages/Login";
import { BusDetails } from "./Pages/BusDetails";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { Register } from "./Pages/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/offers' element={<Boffers />}></Route>
          <Route path='/busDetails' element={<BusDetails />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
