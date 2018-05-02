import * as actionTypes from './counterActionTypes';

export const incrementAction = () => ({
    type: actionTypes.INCREMENT
});

export const decrementAction = () => ({
    type: actionTypes.DECREMENT
});