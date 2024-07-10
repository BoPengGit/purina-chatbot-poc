import React from 'react';
import Home from './Home';
import AffiliateLogin from './AffiliateLogin';
import AffiliateLoginRedirectHome from './AffiliateLoginRedirectHome';
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
        <Route path="/affiliate-login2" element={<AffiliateLoginRedirectHome />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
