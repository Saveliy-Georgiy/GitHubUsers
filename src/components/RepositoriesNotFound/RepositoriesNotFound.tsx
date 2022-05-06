import React from 'react';
import s from "./RepositoriesNotFound.module.css";
import {Span} from "../../universal/Span/Span";
import cross from "../../icons/cross.png";

export const RepositoriesNotFound = () => {

    return (
        <div className={s.listEmptyContainer}>
            <div className={s.imgWrapper}>
                <img src={cross} alt=""/>
            </div>
            <Span value={"Repository list is empty"}/>
        </div>
    );
};