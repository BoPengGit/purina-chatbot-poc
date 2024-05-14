// src/App.js
import React, { useEffect } from 'react';
import backgroundImage from './petfinder.png'; // Adjust the image path as per your project
import './App.css';

function App() {
  // Load the Dialogflow Messenger script after the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="App">
      <header
        className="fullscreen-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain', // Adjust to cover/contain based on your needs
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
                oauth-client-id="313705835625-774b02kb87mhr5bd6ja8chqlu0supddk.apps.googleusercontent.com"
                location="us-central1"
                project-id="nerdery-technology-gen-ai"
                agent-id="6f68b946-9042-4a05-b26c-98db9074a37d"
                language-code="en"
                max-query-length="-1">
                <df-messenger-chat-bubble chat-title="Purina Chatbot PoC"></df-messenger-chat-bubble>
              </df-messenger>
            `,
          }}
        />

        {/* Add custom CSS styles */}
        <style>
          {`
            df-messenger {
              z-index: 999;
              position: fixed;
              bottom: 16px;
              right: 16px;
            }
          `}
        </style>
      </header>
    </div>
  );
}

export default App;