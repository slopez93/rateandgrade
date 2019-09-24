import React from 'react';
import { 
    View,
    Text,
    Button
 } from 'react-native';
import { connect } from 'react-redux';
import createStyles from '../styles/base';
import BasicFlatList from '../components/BasicFlatList';
// services
import { fakePolls } from '../services/fake.api';
import PollsService from '../services/polls.service';

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Polls'
    }

    constructor(props) {
        super(props);
        this.state = {
            polls: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        //const response = await PollsService.instance.getAll();
        //console.log(response);
        const response = fakePolls();
        this.setState({polls: response});
    }

    pollDetail = (id) => {
        this.props.navigation.navigate('PollDetailScreen')
    }

    render() {
        return (
            <View style={styles.content} >
                <Text style={{color: 'red'}}>Lista de encuestas</Text>
                
                <View>
                    <BasicFlatList
                        items={this.state.polls}
                        itemPress={this.pollDetail}
                    />
                </View>    
            </View>
        );
    }


}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(HomeScreen);

const styles = createStyles({

});