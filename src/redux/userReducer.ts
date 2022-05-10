import {AppThunk} from "./store"
import {userAPI} from "../api/api";
import {searchRepositories, setCurrentPage, setTotalRepCount} from "./repositoriesReducer";

export const CHANGE_INPUT_TITLE = 'CHANGE_INPUT_TITLE';
export const SEARCH_USER = 'SEARCH_USER';
export const USER_NOT_FOUND = 'USER_NOT_FOUND';
export const LOADING = 'LOADING';

export type UserActionsType =
    ReturnType<typeof changeInputTitle>
    | ReturnType<typeof searchUser>
    | ReturnType<typeof userNotFound>
    | ReturnType<typeof loading>

const initialState: UserPageType = {
    title: '',
    user: {} as UserType,
    initialPage: true,
    isFound: false,
    isLoaded: true,
}

export type UserType = {
    login: string
    id: number
    avatar_url: string
    html_url: string
    name: string | null
    public_repos: number
    followers: number
    following: number
}

export type UserPageType = {
    title: string
    user: UserType
    initialPage: boolean
    isFound: boolean
    isLoaded: boolean
}

export const userReducer = (state = initialState, action: UserActionsType): UserPageType => {
    switch (action.type) {
        case CHANGE_INPUT_TITLE:
        case SEARCH_USER:
        case USER_NOT_FOUND:
        case LOADING:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const changeInputTitle = (title: string) => {
    return {
        type: CHANGE_INPUT_TITLE,
        payload: {title,},
    } as const
}

export const searchUser = (user: UserType, initialPage: boolean, isFound: boolean) => {
    return {
        type: SEARCH_USER,
        payload: {user, initialPage, isFound,},
    } as const
}

export const userNotFound = (initialPage: boolean, isFound: boolean) => {
    return {
        type: USER_NOT_FOUND,
        payload: {initialPage, isFound,},
    } as const
}

export const loading = (isLoaded: boolean) => {
    return {
        type: LOADING,
        payload: {isLoaded,},
    } as const
}
export const requestUser = (title: string): AppThunk => {
    return (dispatch) => {
        dispatch(loading(false))
        userAPI.getUser(title)
            .then(response => {
                dispatch(searchUser(response.data, false, true))
                dispatch(setTotalRepCount(response.data.public_repos))
            })
            .catch(e => {
                dispatch(userNotFound(false, false))
                console.log(e)
            })
        dispatch(setCurrentPage(1))
        userAPI.getRepositories(title, 1)
            .then(response => {
                dispatch(searchRepositories(response.data))
            })
        dispatch(loading(true))
    }
}