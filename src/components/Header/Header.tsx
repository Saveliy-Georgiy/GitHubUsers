import React from 'react';
import logo from '../../icons/logo.png'
import search from '../../icons/search.png'
import s from './Header.module.css'

export const Header = () => {

    return (
        <header className={s.header}>
            <img src={logo}/>
                <div className={s.searchBlock}>
                    <img src={search}/>
                    <input type="text" placeholder="Enter GitHub username"/>
                </div>
        </header>
    );
};