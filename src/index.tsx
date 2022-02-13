import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import 'rc-notification/assets/index.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Wordle} from './features/wordle/Wordle';
import {Create} from './features/create/Create';
import {Start} from './features/start/Start';
import {NotFound} from './features/not-found/NotFound';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
                <Routes>
                    <Route path="" element={<App/>}>
                        <Route path="start" element={<Start/>}/>
                        <Route path="play" element={<Wordle/>}/>
                        <Route index element={<Create/>}/>
                    </Route>
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
