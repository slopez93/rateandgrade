import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import createStyles from '../styles/base';
import PollsList from '../components/PollsList';
import Title from '../components/Title';
import HeaderCloseSessionButton from '../components/HeaderCloseSessionButton';
// actions
import { showLoading, hideLoading } from '../redux/actions/loading.actions';
// services
import PollsService from '../services/polls.service';

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Polls',
        headerRight: (
            <HeaderCloseSessionButton />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            polls: []
        }
    }

    async componentDidMount() {
        this.props.showLoading();
        const response = await this.fetchData();
        this.setState({polls: response});
        this.props.hideLoading();
    }

    fetchData = async () => {
        const start = this.state.polls.length > 0 ? this.state.polls.length : 0;
        const limit = 10;
        const response = await PollsService.instance.getAll(start, limit);
        return response ? response : [];
    }

    handleLoadMore = async () => {
        const response = await this.fetchData();
        const pools = [...this.state.polls, ...response];
        this.setState({pools});
    }

    pollDetail = (id) => {
        this.props.navigation.navigate('PollDetailScreen', { id });
    }

    render() {
        return (
            <View style={styles.content} >
                <Title text1="Polls list" />
                
                <View>
                    <PollsList
                        items={this.state.polls}
                        itemPress={this.pollDetail}
                        loadMore={this.handleLoadMore}
                    />
                </View>    
            </View>
        );
    }


}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
    showLoading: () => dispatch(showLoading()),
    hideLoading: () => dispatch(hideLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = createStyles({

});