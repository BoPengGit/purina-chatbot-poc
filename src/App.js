import React from 'react';
import Home from './Home';
import AffiliateLogin from './AffiliateLogin';
import AffiliateLogin_closeTab from './AffiliateLogin_closeTab';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// fonts
import "./fonts/Nexa/NexaRegular.otf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/affiliate-login" element={<AffiliateLogin />}></Route>
        <Route path="/affiliate-login2" element={<AffiliateLogin_closeTab />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
