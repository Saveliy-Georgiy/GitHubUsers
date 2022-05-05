import React from 'react';
import s from './SearchResult.module.css'
import {Span} from "../Span/Span";

type SearchResultPropsType = {
    src: string
    value: string
}

export const SearchResult = (props: SearchResultPropsType) => {
    return (
            <div className={s.searchResultWrapper}>
                <div className={s.imgWrapper}>
                    <img src={props.src}/>
                </div>
                <Span value={props.value}/>
            </div>
    );
};