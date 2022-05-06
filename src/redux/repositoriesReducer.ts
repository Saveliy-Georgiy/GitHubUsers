import {AppStateType, AppThunk} from "./store"
import {userAPI} from "../api/api";

export const SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES';
export const SET_TOTAL_REP_COUNT = 'SET_TOTAL_REP_COUNT';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export type RepositoriesActionsType = ReturnType<typeof searchRepositories> | ReturnType<typeof setTotalRepCount> | ReturnType<typeof setCurrentPage>

const initialState: RepositoriesPageType = {
    pageSize: 4,
    totalRepCount: 0,
    currentPage: 1,
    siblingCount: 1,
    repositories: [] as Array<RepositoryType>,
}

export type RepositoryType = {
    id: number
    name: string
    html_url: string
    description: string
    owner: {
        login: string
    }
}

export type RepositoriesPageType = {
    pageSize: number
    totalRepCount: number
    currentPage: number | string
    siblingCount: number
    repositories: Array<RepositoryType>
}

export const repositoriesReducer = (state = initialState, action: RepositoriesActionsType): RepositoriesPageType => {
    switch (action.type) {
        case SEARCH_REPOSITORIES:
            return {...state, ...action.payload}
        case SET_TOTAL_REP_COUNT:
            return {...state, ...action.payload}
        case SET_CURRENT_PAGE:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const searchRepositories = (repositories: Array<RepositoryType>) => {
    return {
        type: SEARCH_REPOSITORIES,
        payload: {repositories,},
    } as const
}
export const setTotalRepCount = (totalRepCount: number) => {
    return {
        type: SET_TOTAL_REP_COUNT,
        payload: {totalRepCount,},
    } as const
}
export const setCurrentPage = (currentPage: number | string) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {currentPage,},
    } as const
}
export const requestRepositories = (login: string, currentPage: number | string): AppThunk => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        userAPI.getRepositories(login, currentPage)
            .then(response => {
                dispatch(searchRepositories(response.data))
            })
    }
}

export const repositoriesPage = (store: AppStateType) => store.repositoriesPage

