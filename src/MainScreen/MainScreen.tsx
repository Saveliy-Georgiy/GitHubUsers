import React from 'react';
import {Repositories} from './Repositories/Repositories';
import {User} from "./User/User";
import s from './MainScreen.module.css'

export const MainScreen = () => {
    return (
        <div className={s.screenWrapper}>
            <div className={s.user}>
                <User/>
            </div>
            <div className={s.rep}>
                <Repositories/>
            </div>
        </div>
    );
};