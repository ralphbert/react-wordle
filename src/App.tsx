import React from 'react';
import {Outlet} from 'react-router-dom';
import './App.css';

function App() {
    const style = {
        margin: '2em auto',
        width: '320px'
    };

    return (
        <div className="text-center" style={style}>
            <Outlet/>
        </div>
    );
}

export default App;
