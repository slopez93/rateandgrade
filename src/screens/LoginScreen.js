import React from 'react';
import { 
    View,
    Button,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import createStyles from '../styles/base';
// actions
import { login } from '../redux/actions/auth.actions';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (fieldName, value) => {
        this.setState({[fieldName]: value});
    }

    submitForm = () => {
        console.log(this.state);
        const { username, password } = this.state;
        this.props.login({ username, password }, this.onSuccess, this.onError);
    }

    onSuccess = () => {
        this.props.navigation.navigate('PollsScreen');
    }

    onError = () => {
        console.log('error');
    }

    render() {
        return (
            <View style={[styles.content, styles.contentWrap]}>
                <View style={styles.loginImgWrap}>
                    <Image style={styles.loginImg} source={require('../assets/images/redux.png')} />
                </View>
                <TextInput
                    placeholder='Username'
                    value={this.state.username}
                    handleChange={(value) => this.handleChange('username', value)} />
                <TextInput
                    placeholder='Password'
                    value={this.state.password}
                    secureTextEntry
                    handleChange={(value) => this.handleChange('password', value)} />
                <Button
                    title='Login'
                    onPress={this.submitForm} />
            </View>
        );
    }


}

const mapDispatchToProps = (dispatch) => ({
    login: ({username, password}, onSuccess, onError) => dispatch(login({username, password}, onSuccess, onError))
});

export default connect(null, mapDispatchToProps)(LoginScreen);

const styles = createStyles({
    contentWrap: {
        flex: 1,
        justifyContent: 'center'
    },
    loginImgWrap: {
        alignItems: 'center',
    },
    loginImg: {
        width : 100,
        height: 100,
        resizeMode: 'contain'
    }
});