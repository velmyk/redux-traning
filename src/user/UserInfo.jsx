import React, { Component } from 'react';

class UserInfo extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>{JSON.stringify(this.props.userData)}</div>
        );
    }
}

UserInfo.defaultProps = {
    userData: 'No user',
};

export default UserInfo;