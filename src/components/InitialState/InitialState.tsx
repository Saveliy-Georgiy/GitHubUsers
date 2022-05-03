import React from 'react';
import { SearchResult } from '../../universal/SearchResult/SearchResult';
import search from '../../icons/search.png'
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {UserPageType} from "../../redux/userReducer";

export const InitialState = () => {

    const userPage = useSelector<AppStateType, UserPageType>(state => state.userPage)

    if (userPage.isAuth) {
        return <Navigate to={'/user'}/>
    }

    return (
        <div>
            <SearchResult src={search} value={"Start with searching a GitHub user"}/>
        </div>
    );
};