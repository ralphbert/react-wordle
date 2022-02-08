import React from 'react';
import './App.css';
import { Wordle } from './features/wordle/Wordle';

function App() {
const style = {
  margin: '2em auto',
  width: '320px',
};

  return (
    <div className="App" style={style}>
      <Wordle />
    </div>
  );
}

export default App;
