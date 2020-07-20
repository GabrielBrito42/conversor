import React from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./component/conversor"

function App() {
  return (
    <div className="App">
    <h2>Conversor de Moedas</h2>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="JPY" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="JPY"></Conversor>
      </div>
    </div>
  );
}

export default App;
