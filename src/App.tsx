import React from 'react';
import './App.css';
import { Calculator } from './components/Calculator';

function App() {
  return (
    <div style={{margin: '1rem'}}>
      <h1>Board Game Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
