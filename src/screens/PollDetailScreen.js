import React from 'react';
import { 
    View,
    Text
 } from 'react-native';
import { connect } from 'react-redux';
import createStyles from '../styles/base';

class PollDetailScreen extends React.Component {

    static navigationOptions = {
        title: 'Poll Detail'
    }

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <View style={styles.content} >
                <Text style={{color: 'red'}}>Detalle de encuesta</Text>
            </View>
        );
    }


}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(PollDetailScreen);

const styles = createStyles({

});