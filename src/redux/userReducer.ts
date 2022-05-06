import {AppThunk} from "./store"
import {userAPI} from "../api/api";
import {searchRepositories, setCurrentPage, setTotalRepCount} from "./repositoriesReducer";

export const CHANGE_INPUT_TITLE = 'CHANGE_INPUT_TITLE';
export const SEARCH_USER = 'SEARCH_USER';
export const USER_NOT_FOUND = 'USER_NOT_FOUND';

export type UserActionsType =
    ReturnType<typeof changeInputTitle>
    | ReturnType<typeof searchUser>
    | ReturnType<typeof userNotFound>

const initialState: UserPageType = {
    title: '',
    user: {} as UserType,
    initialPage: true,
    isFound: false,
    isLoaded: false,
}

export type UserType = {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    name: string | null
    company: string | null
    blog: string
    location: string | null
    email: string | null
    hireable: string | null
    bio: string | null
    twitter_username: string | null
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
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
            return {...state, ...action.payload}
        case SEARCH_USER:
            return {...state, ...action.payload}
        case USER_NOT_FOUND:
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

export const requestUser = (title: string): AppThunk => {
    return (dispatch) => {
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
    }
}
