import React from 'react';
import s from "./Paginator.module.css";
import {DOTS, usePagination} from "./usePagination";
import arrowLeftBlue from "../../../icons/arrowLeftBlue.png"
import arrowLeftGrey from "../../../icons/arrowLeftGrey.png"
import arrowRightBlue from "../../../icons/arrowRightBlue.png"
import arrowRightGrey from "../../../icons/arrowRightGrey.png"

type PaginatorPropsType = {
    currentPage: number
    onPageChange: (currentPage: number | string) => void
    totalCount: number
    siblingCount: number
    pageSize: number
}

export const Paginator = (props: PaginatorPropsType) => {
    const {
        currentPage,
        onPageChange,
        totalCount,
        siblingCount,
        pageSize,
    } = props

    const paginationRange: any = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

const finalPageStyle = (pageNumber: number | string) => {
    return `${s.paginationItem} ${currentPage === pageNumber && s.selectedPage}`
}

    return (
        <div className={s.paginationContainer}>
            <div>{4*currentPage-3}-{4*currentPage} of {totalCount} items</div>
            <div className={s.paginationItem}>
                {currentPage === 1
                    ? <img src={arrowLeftGrey} alt="prev" className={s.arrow}/>
                    : <img src={arrowLeftBlue} alt="prev" onClick={onPrevious} className={s.arrow}/>}
            </div>
            {paginationRange.map((pageNumber: number | string) => {
                if (pageNumber === DOTS) {
                    return <span className={s.paginationItem}>{DOTS}</span>;
                }

                return (
                    <span
                        className={finalPageStyle(pageNumber)}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </span>
                );
            })}
            <div className={s.paginationItem}>
                {currentPage === lastPage
                    ? <img src={arrowRightGrey} alt="next" className={s.arrow}/>
                    : <img src={arrowRightBlue} alt="next" onClick={onNext} className={s.arrow}/>}
            </div>
        </div>

    );
};