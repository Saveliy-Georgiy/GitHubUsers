import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {UserNotFound} from './components/UserNotFound/UserNotFound';
import {InitialState} from "./components/InitialState/InitialState";
import {MainScreen} from "./components/MainScreen/MainScreen";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className={"content"}>
                <Routes>
                    <Route path="/"
                           element={<InitialState/>}/>
                    <Route path="/user-not-found"
                           element={<UserNotFound/>}/>
                    <Route path="/user"
                           element={<MainScreen/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
