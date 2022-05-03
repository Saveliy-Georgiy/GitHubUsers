import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {InitialState} from './components/InitialState/InitialState';
import {UserNotFound} from './components/UserNotFound/UserNotFound';
import {RepositoriesNotFound} from "./components/RepositoriesNotFound/RepositoriesNotFound";
import {MainScreen} from './MainScreen/MainScreen';

const App = () => {
    return (
        <div>
           <Header/>
                <Routes>
                    <Route path="/"
                           element={<InitialState/>}/>
                    <Route path="/user"
                           element={<MainScreen/>}/>
                    <Route path="/user-not-found"
                           element={<UserNotFound/>}/>
                    <Route path="/repositories-not-found"
                           element={<RepositoriesNotFound/>}/>
                </Routes>
        </div>
    );
}

export default App;
