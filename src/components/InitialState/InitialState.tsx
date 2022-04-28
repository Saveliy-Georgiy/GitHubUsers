import React from 'react';
import { SearchResult } from '../../universal/SearchResult/SearchResult';
import search from '../../icons/search.png'
export const InitialState = () => {
    return (
        <div>
            <SearchResult src={search} value={"Start with searching a GitHub user"}/>
        </div>
    );
};