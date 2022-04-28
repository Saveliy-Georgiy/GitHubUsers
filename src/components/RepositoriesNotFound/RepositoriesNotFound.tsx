import React from 'react';
import { SearchResult } from '../../universal/SearchResult/SearchResult';
import cross from '../../icons/cross.png'

export const RepositoriesNotFound = () => {
    return (
        <div>
            <SearchResult src={cross} value={"Repository list is empty"}/>
        </div>
    );
};