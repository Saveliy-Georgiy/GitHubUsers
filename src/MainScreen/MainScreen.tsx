import React from 'react';
import {Repositories} from './Repositories/Repositories';
import {User} from "./User/User";
import s from './MainScreen.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {UserPageType} from "../redux/userReducer";
import {Navigate} from "react-router-dom";
import {RepositoriesNotFound} from '../components/RepositoriesNotFound/RepositoriesNotFound';

export const MainScreen = () => {

    const public_repos = useSelector<AppStateType, number>(state => state.userPage.user.public_repos)
    const userPage = useSelector<AppStateType, UserPageType>(state => state.userPage)

    if (!userPage.isFound) {
        return <Navigate to={'/user-not-found'}/>
    }

    return (
        <div className={s.screenWrapper}>
                <User/>
                {public_repos === 0
                    ?  <RepositoriesNotFound/>
                    : <Repositories public_repos={public_repos}/>}
        </div>
    );
};