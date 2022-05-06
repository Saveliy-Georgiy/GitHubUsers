import React from 'react';
import {useSelector} from "react-redux";
import s from './User.module.css'
import followers from '../../../icons/followers.png'
import following from '../../../icons/following.png'
import {AppStateType} from "../../../redux/store";
import { UserType } from '../../../redux/userReducer';
import { Followers } from '../../../universal/Followers/Followers';

export const User = () => {

    const user = useSelector<AppStateType, UserType>(state => state.userPage.user)

    const finalPeople = (people: number) => {
        return people >= 1000 ? `${(people/1000).toFixed(1)}k`: people
    }
    const finalUserName = user.name === null ? user.login : user.name
    const finalFollowers = `${finalPeople(user.followers)} followers`
    const finalFollowing = `${finalPeople(user.following)} following`

    return (
        <div className={s.userWrapper}>
            <img src={user.avatar_url} alt="avatar" className={s.avatar}/>
            <div className={s.information}>
                <span className={s.name}>{finalUserName}</span>
                <a href={user.html_url} className={s.login} target="__blank">{user.login}</a>
                <div className={s.followersWrapper}>
                    <Followers src={followers} users={finalFollowers}/>
                    <Followers src={following} users={finalFollowing}/>
                </div>
            </div>
        </div>
    );
};