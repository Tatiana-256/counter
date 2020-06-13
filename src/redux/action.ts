import {
    ADD_MAX_VALUE,
    ADD_START_VALUE,
    DECREMENT_MAX_VALUE,
    DECREMENT_START_VALUE,
    INCREMENT_COUNTER,
    INCREMENT_MAX_VALUE,
    INCREMENT_START_VALUE,
    RESET_COUNTER,
    SET_SETTINGS
} from "./reducer";
import {InferActionsTypes} from "./store";


// _____________________action types_________________
export type ActionsType = InferActionsTypes<typeof actions>


// ______________________actions_________________

export const actions = {
    incrementMax: () => ({type: INCREMENT_MAX_VALUE} as const),
    decrementMax: () => ({type: DECREMENT_MAX_VALUE} as const),
    incrementStart: () => ({type: INCREMENT_START_VALUE} as const),
    decrementStart: () => ({type: DECREMENT_START_VALUE} as const),
    addMaxValue: (number: number) => ({
        type: ADD_MAX_VALUE,
        number: Number(number)
    } as const),
    addStartValue: (number: number) => ({
        type: ADD_START_VALUE,
        number: Number(number)
    } as const),
    incrementCounter: () => ({type: INCREMENT_COUNTER} as const),
    resetCounter: () => ({type: RESET_COUNTER} as const),
    setSettings: () => ({type: SET_SETTINGS} as const)
}