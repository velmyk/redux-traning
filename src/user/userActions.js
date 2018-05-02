const userObj = {
    name: 'John Doe',
    email: 'example@email.com'
};

export function userRequestStarted() {

    return {
        type: 'USER_REQUEST_STARTED',
    };

};

export const userReceivedAction = (userData) => ({
    type: 'USER_RECEIVED',
    payload: {
        user: userData
    }
});


export  function fetchUserAction() {

    return function(dispatch) {

        dispatch(userRequestStarted());
            new Promise(resolve => {
                setTimeout(() => resolve(userObj), 2000)
            })
            .then(user => dispatch(userReceivedAction(user)));

    }
}