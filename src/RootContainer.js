import React, { Fragment } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import PollCounter from './components/PollCounter';
import LoadingIndicator from './components/LoadingIndicator';
// styles
import createStyles from './styles/base';


class RootContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { loading } = this.props;
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.container}>
                    {loading.loading && 
                    <LoadingIndicator />
                    }
                    <AppNavigator />
                    <PollCounter />
                </SafeAreaView>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading
});

export default connect(mapStateToProps, null)(RootContainer);

const styles = createStyles();