import React from 'react';
import s from './Span.module.css'

type SpanPropsType = {
    value: string
}

export const Span = (props: SpanPropsType) => {
    return (
        <span className={s.textStyle}>
            {props.value}
        </span>
    );
};