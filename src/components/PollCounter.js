import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles/base';

class PollCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CounterWrap>
                <CounterValue>{this.props.user.pollCounter}</CounterValue>
            </CounterWrap>
        );
    }

}

const CounterWrap = styled.View`
    alignItems: center;
    justifyContent: center;
    borderRadius: 30;
    position: absolute;
    bottom: 15;
    right: 15;
    backgroundColor: ${colors.secondary}
    width: 60;
    height: 60;
`;

const CounterValue = styled.Text`
    fontSize: 15;
    fontWeight: 700;
    color: ${colors.white}
`;

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps, null)(PollCounter);