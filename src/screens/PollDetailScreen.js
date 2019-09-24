import React, { Fragment } from 'react';
import { 
    View,
    Text
 } from 'react-native';
import { connect } from 'react-redux';
import createStyles from '../styles/base';
import Title from '../components/Title';
// actions
import { showLoading, hideLoading } from '../redux/actions/loading.actions';
import { addPollCounter } from '../redux/actions/user.actions';
// services
import PollService from '../services/polls.service';

class PollDetailScreen extends React.Component {

    static navigationOptions = {
        title: 'Poll Detail'
    }

    constructor(props) {
        super(props);
        const id = this.props.navigation.getParam('id');
        this.state = {
            pollId: id,
            data: {},
            fields: []
        }
    }

    componentDidMount() {
        this.props.addPollCounter();
        this.fetchData();
    }

    fetchData = async () => {
        this.props.showLoading();
        const response = await PollService.instance.get(this.state.pollId);
        this.props.hideLoading();
        if (!response) return;
        this.setState({data: response});
        this._buildFields();
    }

    _buildFields = () => {
        let view = [];
        for(let key in this.state.data) {
            const field = this.state.data[key];
            if (typeof field === 'string') {
                view.push(
                    <View style={styles.pollItem}>
                        <Text style={styles.pollLabel}>{key}:</Text>
                        <Text multiline={true}>{field}</Text>
                    </View>
                );
            }
        }
        this.setState({fields: view});
    }

    render() {
        const fields = this.state.fields.map((field, index) => {
           return <Fragment key={index}>{field}</Fragment>
        });
        return (
            <View style={styles.content} >
                <Title text1="Poll detail" />

                <View style={styles.pollDetail}>
                    {fields}
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
    addPollCounter: () => dispatch(addPollCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(PollDetailScreen);

const styles = createStyles({
    pollDetail: {
        borderRadius: 2,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ededed',
        padding: 10
    },
    pollItem: {
        marginBottom: 10
    },
    pollLabel: {
        fontWeight: '700',
        fontSize: 12,
        color: 'blue'
    }
});