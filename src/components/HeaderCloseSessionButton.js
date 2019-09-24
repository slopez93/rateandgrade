import React from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';
// actions
import { logout } from '../redux/actions/auth.actions';

class HeaderCloseSessionButton extends React.Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        this.props.logout();
        this.props.navigation.navigate(NavigationActions.navigate({
            routeName: 'Auth',
            action: NavigationActions.navigate({ routeName: 'LoginScreen' })
        }));
    }

    render() {
        return (
            <Content>
                <Button
                    onPress={this.logout}
                    title="Close session"
                    color="#000"
                />
            </Content>
        );
    }

}

const Content = styled.View`
    marginRight: 10;
`;

const Button = styled.Button`
`;

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(withNavigation(HeaderCloseSessionButton));