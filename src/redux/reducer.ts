import {ActionsType} from "./action";

export const ADD_MAX_VALUE = 'ADD_MAX_VALUE'
export const ADD_START_VALUE = 'ADD_START_VALUE'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const RESET_COUNTER = 'RESET_COUNTER'
export const INCREMENT_MAX_VALUE = 'INCREMENT_MAX_VALUE'
export const DECREMENT_MAX_VALUE = 'DECREMENT_MAX_VALUE'
export const INCREMENT_START_VALUE = 'INCREMENT_START_VALUE'
export const DECREMENT_START_VALUE = 'DECREMENT_START_VALUE'
export const SET_SETTINGS = 'SET_SETTINGS'


export type initialStateType = typeof initialState

const initialState = {
    count: 0,
    maxValue: 1,
    startValue: 0
}


const reducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_MAX_VALUE:
            return {
                ...state,
                maxValue: action.number
            }
        case ADD_START_VALUE:
            return {
                ...state,
                startValue: action.number
            }
        case INCREMENT_COUNTER:
            return {...state, count: state.count + 1}
        case RESET_COUNTER:
            return {...state, count: state.startValue}
        case INCREMENT_MAX_VALUE:
            return {...state, maxValue: state.maxValue + 1}
        case DECREMENT_MAX_VALUE:
            return {...state, maxValue: state.maxValue - 1}
        case INCREMENT_START_VALUE:
            return {...state, startValue: state.startValue + 1}
        case DECREMENT_START_VALUE:
            return {...state, startValue: state.startValue - 1}
        case SET_SETTINGS:
            return {...state, count: state.startValue}
    }
    return state;
}

export default reducer