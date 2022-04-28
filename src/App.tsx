import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {InitialState} from './components/InitialState/InitialState';
import {User} from './components/User/User';
import {UserNotFound} from './components/UserNotFound/UserNotFound';
import {RepositoriesNotFound} from "./components/RepositoriesNotFound/RepositoriesNotFound";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="appWrapperContent">
                <Routes>
                    <Route path="/"
                           element={<InitialState/>}/>
                    <Route path="/user"
                           element={<User/>}/>
                    <Route path="/user-not-found"
                           element={<UserNotFound/>}/>
                    <Route path="/repositories-not-found"
                           element={<RepositoriesNotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
