import React from 'react';
import { connect } from 'react-redux';
import LoadingIndicator from '../components/LoadingIndicator';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = () => {
        this.props.navigation.navigate(this.props.auth.isLoggingIn ? 'App' : 'Auth');
    }

    render() {
        return (
            <LoadingIndicator backgroundColor="#000" />
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(SplashScreen);