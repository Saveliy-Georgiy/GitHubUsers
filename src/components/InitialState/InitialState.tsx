import React from 'react';
import { SearchResult } from '../../universal/SearchResult/SearchResult';
import search from '../../icons/search.png'
import s from './InitialState.module.css'

export const InitialState = () => {
    return (
        <div className={s.initialState}>
            <SearchResult src={search} value={"Start with searching a GitHub user"}/>
        </div>
    );
};