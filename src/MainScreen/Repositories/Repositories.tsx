import React from 'react';
import s from './Repositories.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {repositoriesPage, RepositoriesPageType, requestRepositories} from "../../redux/repositoriesReducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export const Repositories = () => {

    const dispatch = useDispatch<ThunkDispatch<AppStateType, any, AnyAction>>()

    /*const repositoriesPage = useSelector<AppStateType, RepositoriesPageType>(state => state.repositoriesPage)
*/
    const public_repos = useSelector<AppStateType, number>(state => state.userPage.user.public_repos)

    const {
        totalRepCount,
       pageSize,
       repositories,
       currentPage,
    } = useSelector<AppStateType, RepositoriesPageType>(repositoriesPage)

    let pagesCount = Math.ceil(totalRepCount / pageSize)

    const onPageChanged = (currentPage: number) => {
        dispatch(requestRepositories(repositories[0].owner.login, currentPage))
    }

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.repositoriesWrapper}>
            <span>{`Repositories (${public_repos})`}</span>
            {
                repositories.map(r => <div key={r.id}>
                    <span>{r.name}</span>
                    <span>{r.description}</span>
                </div>)
            }
            <div className={s.paginator}>
                {pages.map(p => {
                    return <span
                        className={currentPage === p ? s.selectedPage : s.simplePage}
                        onClick={() => onPageChanged(p)}
                    >{p}</span>
                })}
            </div>
        </div>
    );
};