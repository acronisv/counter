type SetActiveActionType = ReturnType<typeof setActiveAC>
type SetErrorActionType = ReturnType<typeof setErrorAC>
type SetResetActionType = ReturnType<typeof setResetAC>

type ActionType = SetActiveActionType | SetErrorActionType | SetResetActionType

type InitialStateType = {
    active: boolean
    error: boolean
    reset: boolean
}

const initialState = {
    active: false,
    error: false,
    reset: true
}

export const statusReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-ACTIVE':
            return {...state, active: action.status}
        case 'SET-ERROR':
            return {...state, error: action.status}
        case 'RESET':
            return {...state, reset: action.status}
        default:
            return state
    }
}

export const setActiveAC = (value: boolean) => {
    return {type: 'SET-ACTIVE', status: value} as const
}
export const setErrorAC = (value: boolean) => {
    return {type: 'SET-ERROR', status: value} as const
}
export const setResetAC = (value: boolean) => {
    return {type: 'RESET', status: value} as const
}
