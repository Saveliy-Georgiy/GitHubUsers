import React from 'react';
import s from './Repositories.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {repositoriesPage, RepositoriesPageType, requestRepositories} from "../../redux/repositoriesReducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {Paginator} from "./Paginator/Paginator";

export const Repositories = () => {

    const dispatch = useDispatch<ThunkDispatch<AppStateType, any, AnyAction>>()

    const public_repos = useSelector<AppStateType, number>(state => state.userPage.user.public_repos)

    const {
        totalRepCount,
        pageSize,
        repositories,
        currentPage,
        siblingCount,
    } = useSelector<AppStateType, RepositoriesPageType>(repositoriesPage)

    const onPageChange = (currentPage: number | string) => {
        dispatch(requestRepositories(repositories[0].owner.login, currentPage))
    }

    return (
        <div className={s.repositoriesWrapper}>
            <span className={s.repositoriesHeader}>{`Repositories (${public_repos})`}</span>
            {
                repositories.map(r => <div key={r.id} className={s.repository}>
                    <div className={s.textWrapper}>
                        <a className={s.name} href={r.html_url} target="__blank">{r.name}</a>
                        <div className={s.description}>{r.description}</div>
                    </div>
                </div>)
            }
            <Paginator
                // @ts-ignore
                currentPage={currentPage}
                onPageChange={onPageChange}
                totalCount={totalRepCount}
                pageSize={pageSize}
                siblingCount={siblingCount}/>
        </div>
    );
};