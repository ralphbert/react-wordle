import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const style = {
    margin: '2em auto',
    width: '320px'
  };

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  console.log(params);

  return (
    <div className="App" style={style}>
      <Outlet/>
    </div>
  );
}

export default App;
