import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";

import {loadState, saveState} from "../utils/localStorage";

const rootReducer = combineReducers({
    counter: counterReducer
})

const preloadedState = loadState()

export const store = legacy_createStore(rootReducer, preloadedState)

store.subscribe(()=>{
    saveState({
      counter: store.getState().counter
    })
})
export type AppRootStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store=store