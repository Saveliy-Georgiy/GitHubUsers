import React from 'react';
import s from './Repository.module.css'

type RepositoryPropsType = {
    key: number
    href: string
    name: string
    description: string
}
export const Repository = (props: RepositoryPropsType) => {
    return (
        <div className={s.repository}>
            <div className={s.textWrapper}>
                <a className={s.name} href={props.href} target="__blank">{props.name}</a>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    );
};