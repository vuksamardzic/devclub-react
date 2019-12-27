import React from 'react';
import logo from './logo.svg';
import './App.css';
import Workshop from './components/workshop/Workshop';
import Hook from './components/hook/Hook';
import Fragments from './components/fragments/Fragments';
import { ContextProvider } from './Context';
import Country from './components/country/Country';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <Workshop text={'Text'}/>
      <ContextProvider value="my text">
        <Hook/>
      </ContextProvider>
      <Fragments/>
      <Country/>
    </div>
  );
}

export default App;
