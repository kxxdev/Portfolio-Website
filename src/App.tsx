import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Skills from './components/Skills';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import YandexMetrika from './components/YandexMetrika';
import {
  userInfo,
  socialLinks,
  navLinks,
  quote,
  skillBlocks,
  contactInfo,
} from './data';
import { config } from './config';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <YandexMetrika counterId={config.yandexMetrikaId} />

      <Header
        navLinks={navLinks}
        socialLinks={socialLinks}
        siteName={userInfo.name}
      />

      <main className='container content'>
        <Hero userInfo={userInfo} />
        <Quote quote={quote} />
        <Skills skillBlocks={skillBlocks} />
        <About userInfo={userInfo} />
        <Contacts contactInfo={contactInfo} />
      </main>

      <Footer userInfo={userInfo} socialLinks={socialLinks} />
    </div>
  );
};

export default App;
