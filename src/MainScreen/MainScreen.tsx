import React from 'react';
import {Repositories} from './Repositories/Repositories';
import {User} from "./User/User";
import s from './MainScreen.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {SearchResult} from "../universal/SearchResult/SearchResult";
import cross from "../icons/cross.png";

export const MainScreen = () => {

    const public_repos = useSelector<AppStateType, number>(state => state.userPage.user.public_repos)

    return (
        <div className={s.screenWrapper}>
            <div className={s.user}>
                <User/>
            </div>
            <div className={s.rep}>
                {public_repos === 0
                    ?  <SearchResult src={cross} value={"Repository list is empty"}/>
                    : <Repositories public_repos={public_repos}/>}
            </div>
        </div>
    );
};