// import * as counterActionTypes from './counterActionTypes';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REQUEST_STARTED':
            return {
                ...state,
                isLoading: true,
            };
        case 'USER_RECEIVED':
            return {
                ...state,
                userData: action.payload.user,
                isLoading: false,
            };
        default:
            return state;
    }
}

export default userReducer;