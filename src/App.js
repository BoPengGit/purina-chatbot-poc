// src/App.js
import React, { useEffect } from 'react';
import backgroundImage from './petfinder.png'; // Adjust the image path as per your project
// Import images
import petThemeBotBackground from './petfinder_icon.png';
import petThemeUserBackground from './user_icon.jpeg';

import './App.css';

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

  return (
    <div className="App">
      <header
        className="fullscreen-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', // Adjust to cover/contain based on your needs
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          width: '100vw',
          position: 'absolute'
        }}
      >
        {/* Embed Dialogflow Messenger Widget */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <df-messenger
                oauth-client-id="86741273474-krbn0fuq96d7mv747ruip5ccr8duu0mo.apps.googleusercontent.com" // Replace with your OAuth client ID
                project-id="nerdery-tech-petfinder-poc"
                agent-id="e5f9de19-b728-4b17-8f69-07b2b4c0d988"
                language-code="en"
                max-query-length="-1">
                <df-messenger-chat-bubble chat-title="Petfinder Support"></df-messenger-chat-bubble>
              </df-messenger>
            `,
          }}
        />
      </header>
      <style>
        {`
          df-messenger {
            --df-messenger-bot-message: url(${petThemeBotBackground});
            --df-messenger-user-message: url(${petThemeUserBackground});
            --df-messenger-titlebar-background: #a56abf;
            --df-messenger-titlebar-font-color: #ffffff;
            --df-messenger-button-titlebar-color: #ffffff;
            --df-messenger-chat-background: #f4f0f9;
            --df-messenger-chat-button-color: #855987;
            --df-messenger-chat-icon-color: #ffffff;
            --df-messenger-font-color: #4a2040;
            --df-messenger-primary-color: #a56abf;
            --df-messenger-bot-icon: url(${petThemeBotBackground});  // Add your bot icon path
            --df-messenger-user-icon: url(${petThemeUserBackground}); // Add your user icon path
            z-index: 999;
            position: fixed;
            bottom: 16px;
            right: 16px;
            --df-messenger-chat-border-radius: 16px; /* Rounded corners for chat window */
            --df-messenger-chat-bubble-icon-size: 60px; // Larger size for the chat bubble icon
            --df-messenger-chat-bubble-close-icon-size: 36px; // Larger size for the close icon
      

          }

          df-messenger-chat-bubble {
            --df-messenger-chat-bubble-background: #6a0dad;
            --df-messenger-chat-bubble-icon-color: #ffffff;
            --df-messenger-chat-bubble-size: 70px;
            --df-messenger-chat-bubble-border-radius: 25px;
          }
        `}
      </style>
    </div>
  );
}

export default App;
