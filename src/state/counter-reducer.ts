export type counterStateType = {
    minValue: number
    maxValue: number
    count: number
    active: boolean
    error: boolean
    reset: boolean
}

type SetMinValueActionType = ReturnType<typeof setMinValueAC>
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
type IncValueActionType = ReturnType<typeof incValueAC>
type SetActiveActionType = ReturnType<typeof setActiveAC>
type SetErrorActionType = ReturnType<typeof setErrorAC>
type SetResetActionType = ReturnType<typeof setResetAC>

type ActionType = SetMinValueActionType | SetMaxValueActionType | IncValueActionType | SetActiveActionType | SetErrorActionType | SetResetActionType

const initialState = {
    minValue: 0,
    maxValue: 0,
    count: 0,
    active: false,
    error: false,
    reset: true
}

export const counterReducer = (state: counterStateType = initialState, action: ActionType): counterStateType => {
    switch (action.type) {
        case 'SET-MIN-VALUE':
            return {...state, minValue: action.value}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.value}
        case 'INC-VALUE':
            return {...state, count: state.count+1}
        case 'SET-ACTIVE':
            return {...state, active: action.status}
        case 'SET-ERROR':
            return {...state, error: action.status}
        case 'RESET':
            return {...state, reset: action.status, count: action.status ? state.minValue : state.count}
        default:
            return state
    }
}

export const setMinValueAC = (minValue: number) => {
    return {type:'SET-MIN-VALUE', value:minValue} as const
}
export const setMaxValueAC = (maxValue: number) => {
    return {type:'SET-MAX-VALUE', value: maxValue} as const
}
export const incValueAC = () => {
    return {type:'INC-VALUE'} as const
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