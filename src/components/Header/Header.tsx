import React, {ChangeEvent, KeyboardEvent} from 'react';
import logo from '../../icons/logo.png'
import search from '../../icons/search.png'
import s from './Header.module.css'
import {changeInputTitle, requestUser, UserPageType} from "../../redux/userReducer";
import {AppStateType} from '../../redux/store';
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from 'redux-thunk'
import {AnyAction} from 'redux'

export const Header = () => {

    const userPage = useSelector<AppStateType, UserPageType>(state => state.userPage)

    const dispatch = useDispatch<ThunkDispatch<AppStateType, any, AnyAction>>()

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInputTitle(e.currentTarget.value))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            dispatch(requestUser(userPage.title))
        }
    }

    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.searchBlock}>
                <img src={search} alt="search:"/>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    onChange={changeTitle}
                    value={userPage.title}
                    onKeyPress={onKeyPressHandler}
                />
            </div>
        </header>
    );
};


