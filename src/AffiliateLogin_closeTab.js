import React, { useState } from 'react';
import facebookIcon from './assets/facebook-icon.svg';
import googleIcon from './assets/google-icon.svg';

const AffiliateLogin_closeTab = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login__wrapper">
      <h2 className="login__header">Log In</h2>
      <div className="login__container">
        <input
          type="text"
          name="username"
          placeholder='Email'
          id="username"
          className="input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder='Password'
          id="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="https://ebullymatch.com/dog-adoption/" className="button button__primary btn__w-100">Log In</a>
        <a href="/affiliate-login2">Forgot Password?</a>
        <p className="line__through"><span>or log in with</span></p>
        <a href="https://ebullymatch.com/dog-adoption/" className="btn btn__facebook btn__w-100"><img src={facebookIcon} alt="facebook icon"></img><span className="text">Facebook</span></a>
        <a href="https://ebullymatch.com/dog-adoption/" className="btn btn__google btn__w-100"><img src={googleIcon} alt="google icon"></img><span className="text">Google</span></a>
      </div>
    </div>
  );
};

export default AffiliateLogin_closeTab;
