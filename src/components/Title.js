import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
// styles
import createStyles, { colors } from '../styles/base';

const Title = ({text1}) => (
    <View>
        <Text style={styles.title}>{text1}</Text>
    </View>
);

Title.propTypes = {
    text1: PropTypes.string.isRequired
};

const styles = createStyles({
  title: {
    fontSize: 25,
    color: colors.black,
  }
});

export default Title;