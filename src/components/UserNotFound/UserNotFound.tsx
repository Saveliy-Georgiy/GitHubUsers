import React from 'react';
import {SearchResult} from '../../universal/SearchResult/SearchResult';
import user from '../../icons/user.png'
import {Navigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {UserPageType} from "../../redux/userReducer";

export const UserNotFound = () => {

    const userPage = useSelector<AppStateType, UserPageType>(state => state.userPage)

        if (userPage.isFound) {
            return <Navigate to={'/user'}/>
        }

    return (
        <>
            <SearchResult src={user} value={"User not found"}/>
        </>
    );
};