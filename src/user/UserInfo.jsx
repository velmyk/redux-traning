import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './userActions';

// const userObj = {
//     name: 'John Doe',
//     email: 'example@email.com'
// };

class UserInfo extends Component {

    loadUser = () => {
        const {
            // setIsLoading,
            // userDataReceived,
            fetchUserWrappedIntoDispatch
        } = this.props;

        fetchUserWrappedIntoDispatch();

        // setIsLoading();

        // new Promise((resolve, reject) => {
        //     setTimeout(() => resolve({
        //         name: 'John Doe',
        //         email: 'example@email.com'
        //     }), 2000)
        // })
        //     .then(user => userDataReceived(user));
    }

    render() {
        const { isUserLoading, userData } = this.props;
        if (isUserLoading) {
            return (<div>Loading user...</div>);
        }
        return (
            <div>
                <div>{JSON.stringify(userData)}</div>
                <button onClick={this.loadUser}>Load user</button>
            </div>
        );
    }
}

UserInfo.defaultProps = {
    userData: 'No user',
};

const mapStateToProps = state => ({
    userData: state.user.userData,
    isUserLoading: state.user.isLoading,
});

const mapDispatchToProps = {
    userDataReceived: userActions.userReceivedAction,
    setIsLoading: userActions.userRequestStarted,
    fetchUserWrappedIntoDispatch: userActions.fetchUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

// function fetchUser() {
//     dispatch(userActions.fetchUserAction())
// }