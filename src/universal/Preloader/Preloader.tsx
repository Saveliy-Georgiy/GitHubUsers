import React from 'react';
import preloader from "../../icons/preloader.svg";
import s from './Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloader} alt="loading..."/>
        </div>
    );
};