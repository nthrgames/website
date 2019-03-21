import React, { useState } from 'react';
import { MenuButton, Menu, MenuItem } from './Menu';

import './App.css';

import netherLogoRaid from './nether-logo-raid.svg';
import netherLogoSevenSails from './nether-logo-seven-sails.svg';
import netherLogoAbout from './nether-logo-about.svg';
import raidLogo from './raid-logo.svg';
import sevenSailsLogo from './seven-sails-logo.svg';
import aboutLogo from './about-logo.svg';
import netherLogoRaidMobile from './nether-logo-raid-mobile.svg';
import netherLogoSevenSailsMobile from './nether-logo-seven-sails-mobile.svg';
import netherLogoAboutMobile from './nether-logo-about-mobile.svg';
import instagram from './instagram.svg';

import sevenSails01 from './seven-sails-01.png';
import raid01 from './raid-01.png';

const appNavigationItems = [
  {
    key: 'raid',
    text: 'Raid',
    images: [
      {
        src: raid01,
        alt: 'Raid Cards',
      }
    ],
  },
  {
    key: 'seven-sails',
    text: 'Seven Sails',
    images: [
      {
        src: sevenSails01,
        alt: 'Seven Sails Teaser',
      }
    ],
  },
  {
    key: 'about',
    text: 'About',
    images: [],
  },
];

function LeftSide(nav, setNav) {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = appNavigationItems.map(val => {
    return (
      <MenuItem
        key={val.key}
        onClick={() => {
          setIsMenuOpen(false);
          setNav(val.key);
        }}
      >
        {val.text}
      </MenuItem>
    );
  });

  let page;
  let title;
  let subtitle;
  let body;
  let players;
  let time;
  let age;
  let logo;
  let notify;
  let mobileLogo;

  if (nav === 'raid') {
    logo = raidLogo;
    page = '01';
    title = 'Raid';
    subtitle = 'strategic micro deck-building card game about vikings';
    body = `As Odin grows weaker, the gods are vying for domination of the seven realms. Now, they compete for the mortal realm of Midgard, relying on their loyal warriors to claim victory.
      \n Can your village lead your god to victory? Draft warriors, build longboats, battle your opponents’ longboats and raid their village. In the end, only one village will survive and only one god will be declared the new ruler.`;
    players = '2 - 4';
    time = '30';
    age = '+10';
    notify = 'Want to be notified when Raid launches?';
    mobileLogo = netherLogoRaidMobile;
  } else if (nav === 'seven-sails') {
    logo = sevenSailsLogo;
    page = '02';
    title = 'Seven Sails';
    subtitle = 'tactical single-unit war game about pirates';
    body = `Play as one of the seven deadly pirate captains as you fight to control the high seas. Gather treasure from remote beaches, strengthen your ship with your plundered loot, and battle enemy ships on the ocean waves in a fight to be crowned the Pirate King!`;
    players = '2 - 7';
    time = '90';
    age = '+10';
    notify = 'Want to be notified when Seven Sails launches?';
    mobileLogo = netherLogoSevenSailsMobile;
  } else {
    logo = aboutLogo;
    page = '03';
    title = 'About';
    subtitle = 'a story about two brothers, mongolia, and a runaway yak';
    body = `Nether Games was started by two brothers, Brennen & Blake Peters. They grew up on classic board games but spent most of their time playing video and computer games. They didn’t get into modern board games until they got older and realized the joy of physically being present was more satisfying than hanging out between two screens.
      \n In 2015 Brennen and Blake started designing their first board game, Seven Sails. They had both grown up loving pirates and wanted to see a more ruthless and competitive pirate game, something that truly captured the feeling of what it meant to rule the seas. They didn’t realize it would be a four year journey to see the game to completion.
      \n In 2018, Brennen had a chance to do a race across the world called the Mongol Rally. It was a car endurance race that started in London, UK and ended in Ulaanbaatar, Mongolia. Since he had been working tirelessly on Seven Sails, he decided to wrap the car and get some attention while driving 20,000 miles across the eastern hemisphere.
      \n During the trip there was quite a lot of down time while being stuck at border crossings in Turkey and camping in the middle of Mongolia. Many games of Seven Sails were played, however, given the limited space inside the car, they needed an easy game to play while they drove ~10 hours a day. This became the origin story of the Raid card game.
      \n Raid was all about being a lightweight, competitive card game that could be played even on a road trip. Because of the more simplistic nature of the game and straightforward process to manufacture card games, Brennen and Blake decided to launch Raid as the first release from Nether Games.  They also hoped this would help grow an audience and following for Nether in preparation for launching their much bigger game, Seven Sails, and future releases.
      \n Both brothers love creating games and enjoy competition as a way to connect with friends, family and fellow gaming fanatics. Nether Games embodies this spirit and they hope y’all enjoy their games as much as they enjoyed making them.`;
    mobileLogo = netherLogoAboutMobile;
  }

  const renderStats = () => {
    return (
      <div className="Content-Stats">
        <div className="Content-Stat">
          <i className="material-icons Stat-Icon">people</i>
          <span className="Stat-Text">
            {`${players} players`}
          </span>
        </div>
        <div className="Content-Stat">
          <i className="material-icons Stat-Icon">timelapse</i>
          <span className="Stat-Text">
          {`${time} mins`}
          </span>
        </div>
        <div className="Content-Stat">
          <i className="material-icons Stat-Icon">child_care</i>
          <span className="Stat-Text">
          {`${age} years`}
          </span>
        </div>
      </div>
    );
  };

  const renderEmail = () => {
    return (
      <div>
        <div className="Email-Title">
          {notify}
        </div>
        <input
          type="text"
          name="email"
          className="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <div
          className="Email-Button"
          onClick={() => {
            console.log('Send Email For Raid');
          }}
        >
          I'm Ready!
        </div>
      </div>
    );
  };

  return (
    <div className="Left">
      <div className="Left-Content">
        <div>
          <div className="Menu">
            <MenuButton
              open={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <Menu open={isMenuOpen}>
            <a
              href="https://www.instagram.com/nthrgames/"
              target="_blank"
              rel="noopener noreferrer"
              className="Instagram"
            >
              <img src={instagram} alt="Instagram Icon" />
            </a>
            {menuItems}
            <img src={mobileLogo} className="Mobile-Logo" alt={`${title} Mobile Logo`} />
          </Menu>
        </div>
        <img src={logo} className="Left-Logo" alt={`${title} Logo`} />
        <span className="Content-Title">
          {title}
        </span>
        <span className="Content-Subtitle">
          {subtitle}
        </span>
        <span className="Content-Body">
          {body}
        </span>
        {players && renderStats()}
        {notify && renderEmail()}
      </div>
      <div className="Left-Header">
        <span className="Left-Page">
          {page}
        </span>
      </div>
    </div>
  );
};

const RightSide = (nav) => {
  const images = appNavigationItems
    .find(i => i.key === nav)
    .images.map((image, i) => {
      return (
        <img key={i} src={image.src} className="Image-Gallery" alt={image.alt} />
      );
    });

  return (
    <div className="Right">
      {images}
    </div>
  );
};

function App() {
  const [nav, setNav] = useState('raid');

  let appActive;
  let logoSource;

  if (nav === 'raid') {
    appActive = 'App-Raid';
    logoSource = netherLogoRaid;
  } else if (nav === 'seven-sails') {
    appActive = 'App-Seven-Sails';
    logoSource = netherLogoSevenSails;
  } else {
    appActive = 'App-About';
    logoSource = netherLogoAbout;
  }

  const renderNav = appNavigationItems.map(({ key, text }) => {
    return (
      <span
        key={key}
        className={`App-Nav-Item ${nav === key && 'App-Nav-Item-Active'}`}
        onClick={() => {
          setNav(key);
        }}
      >
        {text}
      </span>
    );
  });

  return (
    <div className={`App ${appActive}`}>
      <div className="App-Header">
        <img src={logoSource} className="App-Nether-Logo" alt="Nether Games Logo" />
        <div className="App-Nav">
          {renderNav}
          <a
            href="https://www.instagram.com/nthrgames/"
            target="_blank"
            rel="noopener noreferrer"
            className="Instagram"
          >
            <img src={instagram} alt="Instagram Icon" />
          </a>
        </div>
      </div>
      <div className="App-Side App-Side-Left">
        {LeftSide(nav, setNav)}
      </div>
      <div className="App-Side App-Side-Right">
        {RightSide(nav)}
      </div>
    </div>
  );
}

export default App;
