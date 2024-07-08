// src/App.js
import React, { useEffect } from 'react';
import './App.css';

// Import images
import logo from './assets/petfinder-logo.png';
import dog from './assets/dog.jpg';
import poweredByPurina from './assets/powered-by-purina.png';
import caretDown from './assets/caret-down.svg';
import hamburgerIcon from './assets/hamburger-icon.svg';
import heartIcon from './assets/heart-icon.svg';
import heartOutlineIcon from './assets/heart-outline-icon.svg';
import pinIcon from './assets/pin-icon.svg';
import breedIcon from './assets/breed-icon.svg';
import ageIcon from './assets/age-icon.svg';
import sexIcon from './assets/sex-icon.svg';
import sizeIcon from './assets/size-icon.svg';
import coatIcon from './assets/coat-icon.svg';
import colorIcon from './assets/color-icon.svg';
import personalityIcon from './assets/personality-icon.svg';
import greenCheckIcon from './assets/green-check-icon.svg';
import questionIcon from './assets/question-icon.svg';
import kidsIcon from './assets/kids-icon.svg'
import dogIcon from './assets/dog-icon.svg'
import catIcon from './assets/cat-icon.svg'
import otherAnimalsIcon from './assets/other-animals-icon.svg'
import redAlertIcon from './assets/red-alert-icon.svg'
import bellIcon from './assets/bell-icon.svg'
import chevronLeftIcon from './assets/chevron-left-icon.svg';
import chevronRightIcon from './assets/chevron-right-icon.svg';
import benefulFood from'./assets/beneful-food.png';
import plusIcon from './assets/plus-icon.svg';
import bulldogRescue from './assets/bulldog-rescue.png';
import infoIcon from './assets/info-icon.svg';
import mailIcon from './assets/mail-icon.svg';
import phoneIcon from './assets/phone-icon.svg';
import clockIcon from './assets/clock-icon.svg';
import calendarIcon from './assets/calendar-icon.svg';

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
          <p className="card__subtitle">
            Puppy
            <span>&#183;</span>
            Male
            <span>&#183;</span>
            Medium
          </p>
          <p className="card__breed">American Bulldog</p>
          <div className="card__button-container">
            <a href="https://ebullymatch.com/dog-adoption/" target="_blank" rel="noopener noreferrer" className="button button__primary">I'm Ready to Apply!</a>
            <button onClick={openChat} className="button button__outline">I Have a Question</button>
          </div>
          <small className="card__response-time">Typically Responds in 1-2 days.</small>
        </div>
        <div className="description__wrapper">
          <h2 className="">About Rudy</h2>
          <div className="icon__text__wrapper">
            <img src={pinIcon} alt="pin" />
            <p>Chicago, IL</p>
          </div>
          <hr></hr>
          <h3>Breed</h3>
          <div className="icon__text__wrapper">
            <img src={breedIcon} alt="breed" />
            <p className="text__primary">American Bulldog</p>
          </div>
          <hr></hr>
          <h3>Physical Traits</h3>
          <div className="icon__text__wrapper">
            <img src={ageIcon} alt="age" />
            <p>Young <span>(under 3 years old)</span></p>
          </div>
          <div className="icon__text__wrapper">
            <img src={sexIcon} alt="sex" />
            <p>Male</p>
          </div>
          <div className="icon__text__wrapper">
            <img src={sizeIcon} alt="size" />
            <p>Medium <span>(26-60lbs)</span></p>
          </div>
          <div className="icon__text__wrapper">
            <img src={coatIcon} alt="coat length" />
            <p>Coat: <span>Short</span></p>
          </div>
          <div className="icon__text__wrapper">
            <img src={colorIcon} alt="color" />
            <p>Blonde</p>
          </div>
          <hr></hr>
          <h3>Behavior</h3>
          <div className="icon__text__wrapper">
            <img src={personalityIcon} alt="personality" />
            <p>Personality: <span>Playful, Snuggly</span></p>
          </div>
          <div className="icon__text__wrapper">
          <img src={greenCheckIcon} alt="green check" />
            <p>House-trained: <span>Yes</span></p>
          </div>
          <hr></hr>
          <h3>Health</h3>
          <div className="icon__text__wrapper">
            <img src={greenCheckIcon} alt="green check" />
            <p>Spayed/Neutered</p>
          </div>
          <div className="icon__text__wrapper">
            <img src={greenCheckIcon} alt="green check" />
            <p>Vaccinated</p>
          </div>
          <div className="icon__text__wrapper">
            <img src={greenCheckIcon} alt="green check" />
            <p>Special Needs</p>
          </div>
          <hr></hr>
          <h2>Rudy's Compatibility</h2>
          <div className="compatibility__card__wrapper">
            <div className="compatibility__card">
              <img src={questionIcon} className="indicator" alt="indicator" />
              <img src={kidsIcon} alt="compatibility kids" />
              <p>Kids</p>
              <small>Unknown</small>
            </div>
            <div className="compatibility__card">
              <img src={questionIcon} className="indicator" alt="indicator" />
              <img src={dogIcon} alt="compatibility dogs" />
              <p>Dogs</p>
              <small>Unknown</small>
            </div>
            <div className="compatibility__card">
              <img src={redAlertIcon} className="indicator" alt="indicator" />
              <img src={catIcon} alt="compatibility cats" />
              <p>Cats</p>
              <small>No</small>
            </div>
            <div className="compatibility__card">
              <img src={questionIcon} className="indicator" alt="indicator" />
              <img src={otherAnimalsIcon} alt="compatibility other animals" />
              <p>Other Animals</p>
              <small>Unknown</small>
            </div>
          </div>
          <hr></hr>
          <div className="alert__wrapper">
            <img src={bellIcon} alt="bell icon" />
            <small><em>Petfinder recommends that you should always take reasonable security steps before making online payments.</em></small>
          </div>
        </div>
        <div className="divider"></div>
        <div className="description__wrapper">
          <h2>Rudy's Story</h2>
          <p>
            Meet Rudy, a charming 7-month-old, 50-pound Bulldog/Terrier mix who's overflowing with energy and love! This happy, playful cuddle monster loves chasing balls and having fun with doggy friends (in a grassy yard!). He's already learning his commands (treat-motivated!), is housebroken and crate-trained, and waits eagerly for his daily dose of belly rubs.
          </p>
          <p>
            Rudy has a one-of-a-kind personality! His legs may be a little wobbly, but that doesn't stop him from being a playful pup. He might wear braces or booties sometimes, but that just adds to his charm. He thrives best in a home with a grassy yard for playtime and with a family who can offer love and understanding.
          </p>
          <p>
            This sweet boy loves people of all ages and gets along well with other dogs (though introductions are always recommended!). He's eager to please and will be a loyal companion for the right family. While he might be a little too enthusiastic for some cats, he's happy to shower his humans with affection.
          </p>
          <p>
            Rudy's a special dog looking for a special family to call his own. He's healthy (vaccinated, microchipped, etc.) and will be neutered soon. Is your heart ready for a playful pup who loves belly rubs? Contact us to meet Rudy today!
          </p>
          <p>
            Rudy’s vaccines are also up to date as of 03/15/2023.
          </p>
          <p className="text__primary"><b>Show less</b></p>
        </div>
        <div className="divider"></div>
        <div className="description__wrapper">
          <h2>Previously Asked Questions</h2>
          <p><b>Is Rudy potty trained?</b></p>
          <div className="d__flex justify__space__between">
            <span>Petlover245</span>
            <small>10 DAYS AGO</small>
          </div>
          <p>Yes, he is pretty well potty trained with some occasional accidents that he feels really bad about.</p>
          <p><b>Hi, I have a 5 year old who loves to snuggle with pets and loves dogs soooo much. Is Rudy good with kids that age?</b></p>
          <div className="d__flex justify__space__between">
            <span>Michael Scott</span>
            <small>42 DAYS AGO</small>
          </div>
          <p>
            Speaking of snuggling, he’s been great with the toddler and 7-year-old kids in his foster home (loves to watch movies and share snacks with them) but prefers a home without cats. We haven’t been able to test him with other dogs just yet, since there aren’t any dogs in his foster home.
          </p>
          <p className="text__primary"><b>Show more</b></p>
        </div>
        <div className="food__finder__carousel">
          <div className="food__finder__card">
            <h2>Rudy Might do well on the following pet food:</h2>
            <p>(based on these characteristics)</p>
            <div className="d__flex justify__space__around">
              <div className="pill">adult</div>
              <div className="pill">large breed</div>
            </div>
            <div className="d__flex justify__space__between">
              <img src={chevronLeftIcon} alt="chevron left" />
              <img src={benefulFood} alt="animal food" />
              <img src={chevronRightIcon} alt="chevron right" />
            </div>
            <p><b>Purina Benful Originals with Natural Salmon</b></p>
            <p><small>Good food starts with good ingredients. And that's what you'll find at the heart of...</small></p>
            <button className="button button__primary">View Product</button>
          </div>
          <div className="food__finder__cta d__flex justify__space__between">
            <p><b>How Pet Food Finder Works</b></p>
            <img src={plusIcon} alt="plus icon" />
          </div>
        </div>
        <div className="description__wrapper rescue__wrapper">
          <img src={bulldogRescue} alt="rescue logo" />
          <h2>Rudy is from Chicago English Bulldog Rescue (CEBR)</h2>
          <p>[Chicago, IL]</p>
          <p><b>Our Mission</b></p>
          <p>
            Chicago English Bulldog Rescue (CEBR for short) and our volunteers have been helping pure-bred bullies and their families for over 17 years now. We are the OG of bully rescues as a licensed Illinois shelter and a 501c3 charitable organization. The care we provide our bulldogs exceeds any you will find from a breed rescue…heck, any rescue! This love includes a high quality diet, the best veterinary care around and behavioral evaluations of the highest quality.
          </p>
          <p className="text__primary"><b>Read more on our profile page</b></p>
          <div className="icon__text__wrapper">
            <img src={infoIcon} alt="info icon" />
            <small className="text__primary"><b>Adoption Policy</b></small>
          </div>
          <div className="icon__text__wrapper">
            <img src={mailIcon} alt="mail icon" />
            <small className="text__primary"><b>email@service.com</b></small>
          </div>
          <div className="icon__text__wrapper">
            <img src={phoneIcon} alt="phone icon" />
            <small className="text__primary"><b>(123) 456-7890)</b></small>
          </div>
          <div className="icon__text__wrapper">
            <img src={clockIcon} alt="clock icon" />
            <small className="text__primary"><b>Today's hours: 9:am - 4pm</b></small>
          </div>
          <div className="icon__text__wrapper">
            <img src={calendarIcon} alt="calendar icon" />
            <small><b>Visits by appointment only</b></small>
          </div>
          <div className="location__wrapper d__flex">
            <div className="pin__icon">
              <img src={pinIcon} alt="pin icon" />
            </div>
            <div className="d__flex flex__direction__column">
              <small><b>Location</b></small>
              <small>1234 Street name</small>
              <small>Address Line 2</small>
              <small>Chicago, IL 60630</small>
              <small className="text__primary m-0"><b>Get directions</b></small>
            </div>
          </div>
          <a href="https://ebullymatch.com/dog-adoption/" target="_blank" rel="noopener noreferrer" className="button button__primary">Visit Our Profile Page</a>
        </div>
        <div className="divider"></div>

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
                <df-messenger-chat-bubble chat-title="Rudy's Room" allow-fullscreen="small"></df-messenger-chat-bubble>
              </df-messenger>
            `,
          }}
        />
      </main>

    </div>
  );
}

export default App;
