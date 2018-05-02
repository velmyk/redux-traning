const userObj = {
    name: 'John Doe',
    email: 'example@email.com'
};

const userRequestStarted = () => ({
    type: 'USER_REQUEST_STARTED',
});

const userReceived = (userData) => ({
    type: 'USER_RECEIVED',
    payload: {
        user: userData
    }
});

export const fetchUserAction = () => dispatch => {
    Promise.resolve(userObj)
        .then(user => dispatch(userReceived(user)));
}