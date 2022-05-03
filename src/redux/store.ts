import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {UserActionsType, userReducer} from "./userReducer";
import {RepositoriesActionsType, repositoriesReducer} from "./repositoriesReducer";

const rootReducers = combineReducers({
    userPage: userReducer,
    repositoriesPage: repositoriesReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducers>
export type AppActionsType = UserActionsType | RepositoriesActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

// @ts-ignore
window.store = store;