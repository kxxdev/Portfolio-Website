import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Skills from './components/Skills';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import YandexMetrika from './components/YandexMetrika';
import ConsoleGreeting from './components/ConsoleGreeting';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <YandexMetrika />
      <ConsoleGreeting />

      <Header />

      <main className='container content'>
        <Hero />
        <Quote />
        <Skills />
        <About />
        <Contacts />
      </main>

      <Footer />
    </div>
  );
};

export default App;
