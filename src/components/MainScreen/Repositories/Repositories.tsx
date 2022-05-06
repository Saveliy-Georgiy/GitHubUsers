import React from 'react';
import s from './Repositories.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {Paginator} from "./Paginator/Paginator";
import {AppStateType} from "../../../redux/store";
import {repositoriesPage, RepositoriesPageType, requestRepositories} from '../../../redux/repositoriesReducer';
import {Repository} from "./Repository/Repository";

type RepositoriesPropsType = {
    public_repos: number
}
export const Repositories = (props: RepositoriesPropsType) => {

    const dispatch = useDispatch<ThunkDispatch<AppStateType, any, AnyAction>>()

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
            <span className={s.repositoriesHeader}>{`Repositories (${props.public_repos})`}</span>
            {
                repositories.map(r =>
                    <Repository key={r.id} href={r.html_url} name={r.name} description={r.description}/>)
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