import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {UserType} from "../../redux/userReducer";
import s from './User.module.css'
import followers from '../../icons/followers.png'
import following from '../../icons/following.png'

export const User = () => {

    const user = useSelector<AppStateType, UserType>(state => state.userPage.user)

    const finalPeople = (people: number) => {
        return people >= 1000 ? `${(people/1000).toFixed(1)}k`: people
    }
    const finalUserName = user.name === null ? user.login : user.name
    const finalFollowers = finalPeople(user.followers)
    const finalFollowing = finalPeople(user.following)

    return (
        <div className={s.userWrapper}>
            <img src={user.avatar_url} alt="avatar" className={s.avatar}/>
            <div className={s.information}>
                <span className={s.name}>{finalUserName}</span>
                <a href={user.html_url} className={s.login} target="__blank">{user.login}</a>
                <div className={s.peopleWrapper}>
                    <div className={s.people}>
                        <img src={followers} alt=""/>
                        <span>{finalFollowers} followers</span>
                    </div>
                    <div className={s.people}>
                        <img src={following} alt=""/>
                        <span>{finalFollowing} following</span>
                    </div>
                </div>
            </div>
        </div>
    );
};