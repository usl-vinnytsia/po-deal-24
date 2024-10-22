import './App.css';
import React from 'react';

import Header from './components/Header/Header';
import MainScreen from './components/MainScreen/MainScreen';
import About from './components/About/About';
import Team from './components/Team/Team';
import { Partners } from './components/Partners/Partners';
import { Program } from './components/Program/Program';
import { Sell } from './components/Sell/Sell';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <About />
      <Team />
      <Partners />
      <Program />
      <Sell />
      <Footer />
    </div>
  );
}

export default App;
