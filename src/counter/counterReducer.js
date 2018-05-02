import * as counterActionTypes from './counterActionTypes';

const counterReducer = (state = { value: 0 }, action) => {
    switch (action.type) {
        case counterActionTypes.INCREMENT:
            return {
                ...state,
                value: state.value + 1
            };
        case counterActionTypes.DECREMENT:
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state;
    }
}

export default counterReducer;