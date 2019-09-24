import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import { colors } from '../styles/base';

const LoadingIndicator = () => (
  <Container>
    <ActivityIndicator size="large" color={colors.secondary} /> 
  </Container>
);

const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right:0;
  top: 0;
  alignItems: center;
  justifyContent: center;
  zIndex: 20;
  backgroundColor: ${colors.white};
`;


export default LoadingIndicator;
