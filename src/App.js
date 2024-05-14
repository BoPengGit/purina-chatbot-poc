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
            --df-messenger-titlebar-background: #6a0dad; /* Darker purple for the title bar */
            --df-messenger-titlebar-font-color: #ffffff; /* Ensures text color is white for better readability */
            --df-messenger-button-titlebar-color: #ffffff; /* Title bar text color */
            --df-messenger-chat-background: #e0d4f7; /* Light purple background, now slightly darker */
            --df-messenger-chat-button-color: #4b0082; /* Very dark purple for chat button */
            --df-messenger-chat-icon-color: #ffffff; /* Icon color inside the chat button */
            --df-messenger-font-color: #331a4d; /* Darker text color for better contrast */
            --df-messenger-primary-color: #6a0dad; /* Primary theme color, applied to title bar and other elements */
            --df-messenger-bot-icon: url(${petThemeBotBackground});  // Ensure your bot icon path is correct
            --df-messenger-user-icon: url(${petThemeUserBackground}); // Ensure your user icon path is correct
            z-index: 999;
            position: fixed;
            bottom: 16px;
            right: 16px;
          }

          /* Additional customizations for pet-themed elements */
          df-messenger-chat-bubble {
            --df-messenger-chat-bubble-background: #6a0dad; /* Updated purple background for chat bubble */
            --df-messenger-chat-bubble-icon-color: #ffffff; /* Chat bubble icon color */
            --df-messenger-chat-bubble-size: 50px; /* Chat bubble size */
            --df-messenger-chat-bubble-border-radius: 25px; /* Rounded chat bubble */
          }
        `}
    </style>
    </div>
  );
}

export default App;
