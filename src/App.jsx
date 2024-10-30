import './App.scss';
import React from 'react';

import Header from './components/Header/Header';
import MainScreen from './components/MainScreen/MainScreen';
import About from './components/About/About';
import Team from './components/Team/Team';
import { Partners } from './components/Partners/Partners';
import { Program } from './components/Program/Program';
import { Footer } from './components/Footer/Footer';
import { Speakers } from './components/Speakers/Speakers';


function App() {
  return (
    <main className="App">
      <Header />
      <MainScreen />
      <About />
      <Partners />
      <Program />
      <Speakers />
      <Team />
      <Footer />
    </main>
  );
}

export default App;
