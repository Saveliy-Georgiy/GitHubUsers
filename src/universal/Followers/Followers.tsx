import React from 'react';
import s from './Followers.module.css'

type UsersPropsType = {
    src: string
    users: string
}

export const Followers = (props: UsersPropsType) => {
    return (
        <div className={s.followers}>
            <img src={props.src} alt=""/>
            <span>{props.users}</span>
        </div>
    );
};