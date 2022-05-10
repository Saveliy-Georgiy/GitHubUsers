import React from 'react';
import {SearchResult} from '../../universal/SearchResult/SearchResult';
import search from '../../icons/search.png'
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {UserPageType} from "../../redux/userReducer";

export const InitialState = () => {

    const userPage = useSelector<AppStateType, UserPageType>(state => state.userPage)

    if (!userPage.initialPage) {
        if (userPage.isFound) {
            return <Navigate to={'/user'}/>
        } else {
            return <Navigate to={'/user-not-found'} />
        }
    }

    return (
        <>
            <SearchResult src={search} value={"Start with searching a GitHub user"}/>
        </>
    );
};