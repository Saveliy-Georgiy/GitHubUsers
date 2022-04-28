import React from 'react';
import { SearchResult } from '../../universal/SearchResult/SearchResult';
import user from '../../icons/user.png'

export const UserNotFound = () => {
    return (
        <div>
            <SearchResult src={user} value={"User not found"}/>
        </div>
    );
};