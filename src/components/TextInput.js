import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../styles/base';

class TextInput extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        handleChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        placeholderColor: PropTypes.string
    };

    static defaultProps = {
        placeholder: '',
        placeholderColor: colors.black
    };

    render() {
        const {
            value,
            handleChange,
            placeholder,
            placeholderColor,
            style
        } = this.props;
        return (
            <Input
                style={style}
                multiline={true}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                onChangeText={(text) => handleChange(text)}
                value={value}
            />
        )
    }
}

const Input = styled.TextInput`
    color: ${colors.black};
`;

export default TextInput;
