// src/App.js
import React, { useEffect } from 'react';
import './App.css';

// Import images
import logo from './assets/petfinder-logo.png';
import dog from './assets/dog.jpeg';
import poweredByPurina from './assets/powered-by-purina.png';
import caretDown from './assets/caret-down.svg';
import hamburgerIcon from './assets/hamburger-icon.svg';
import heartIcon from './assets/heart-icon.svg';
import heartOutlineIcon from './assets/heart-outline-icon.svg';

// fonts
import "./fonts/Nexa/NexaRegular.otf";

function App() {
  // Load the Dialogflow Messenger script after the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css';
    document.head.appendChild(link);
  }, []);

  const openChat = () => {
    const dfMessengerBubble = document.querySelector('df-messenger-chat-bubble');
    dfMessengerBubble.openChat();
  };

  return (
    <div className="app">

      <div className="dropdown">
        <img src={poweredByPurina} className="dropdown__image" alt="Dog"/>
        <img src={caretDown} className="dropdown__icon" alt="Caret Down"/>
      </div>

      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="Petfinder Logo"/>
        </div>
        <div className="header__icons">
          <img src={heartIcon} className="header__icon" alt="Heart Icon"/>
          <img src={hamburgerIcon} className="header__icon" alt="Hamburger Icon"/>
        </div>
      </header>

      <main>
        <div className="tabs">
          <div className="tabs__link tabs__link--active">Photos</div>
          <div className="tabs__link">About</div>
          <div className="tabs__link">Story</div>
          <div className="tabs__link">How to Adopt</div>
        </div>
        <div className="carousel">
          <div className="carousel__image-wrapper">
            <img src={dog} className="carousel__image carousel__image--active" alt="Dog"/>
            <div className="carousel__icon-wrapper">
              <img src={heartOutlineIcon} className="carousel__icon" alt="Favorite Heart Icon" />
            </div>
          </div>
          <ul className="carousel__indicator-list">
            <li className="carousel__indicator carousel__indicator--active"></li>
            <li className="carousel__indicator"></li>
            <li className="carousel__indicator"></li>
            <li className="carousel__indicator"></li>
            <li className="carousel__indicator"></li>
            <li className="carousel__indicator"></li>
          </ul>
        </div>
        <div className="card">
          <h1 className="card__title">Rudy</h1>
          <h2 className="card__subtitle">
            Puppy
            <span>&#183;</span>
            Male
            <span>&#183;</span>
            Medium
          </h2>
          <h3 className="card__breed">Australian Shepherd</h3>
          <div className="card__button-container">
            <a href="https://ebullymatch.com/dog-adoption/" target="_blank" rel="noopener noreferrer" className="button button--primary">I'm Ready to Apply!</a>
            <button onClick={openChat} className="button button--outline">I Have a Question</button>
          </div>
          <small className="card__response-time">Typically Responds in 1-2 days.</small>
        </div>
        {/* Embed Dialogflow Messenger Widget */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <df-messenger
                project-id="nerdery-tech-petfinder-poc"
                intent="WELCOME"
                agent-id="ad63a800-fc01-49bb-a653-d29ffcaec7da"
                language-code="en"
                max-query-length="-1">
                <df-messenger-chat-bubble chat-title="Petfinder Support" allow-fullscreen="small"></df-messenger-chat-bubble>
              </df-messenger>
            `,
          }}
        />
      </main>

    </div>
  );
}

export default App;
