import React from 'react';
import {Outlet} from 'react-router-dom';
import './App.css';

function App() {
    const style = { };

    return (
        <div className="app text-center" style={style}>
            <Outlet/>
        </div>
    );
}

export default App;
