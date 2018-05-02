const userObj = {
    name: 'John Doe',
    email: 'example@email.com'
};

export const userRequestStarted = () => ({
    type: 'USER_REQUEST_STARTED',
});

export const userReceivedAction = (userData) => ({
    type: 'USER_RECEIVED',
    payload: {
        user: userData
    }
});

export const fetchUserAction = () => dispatch => {
    Promise.resolve(userObj)
        .then(user => dispatch(userReceivedAction(user)));
}