import React, { Fragment } from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
// styles
import createStyles from './styles/base';


class RootContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.container}>
                    <AppNavigator />
                </SafeAreaView>
            </Fragment>
        );
    }
}

const styles = createStyles();

export default RootContainer;