import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {MainScreen} from './MainScreen/MainScreen';
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {UserPageType} from "./redux/userReducer";
import {SearchResult} from "./universal/SearchResult/SearchResult";
import search from './icons/search.png'
import user from './icons/user.png'

const App = () => {

    const userPage = useSelector<AppStateType, UserPageType>(state => state.userPage)

       /* if (userPage.initialPage) {
            return <Navigate to={'/'}/>
        } else {
            if (userPage.isFound) {
                return <Navigate to={'/user'}/>
            } else {
                return <Navigate to={'/user-not-found'}/>
            }
        }*/

    return (
        <div className="App">
            <Header/>
            <div className={"content"}>
                <Routes>
                    <Route path="/"
                           element={<SearchResult src={search} value={"Start with searching a GitHub user"}/>}/>
                    <Route path="/user-not-found"
                           element={<SearchResult src={user} value={"User not found"}/>}/>
                    <Route path="/user"
                           element={<MainScreen/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
