import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export const colors = {
    primary: '#000',
    secondary: '#5490FF',
    tertiary: '#5490FF',
    white: '#fff',
    black: '#000'
}

export const padding = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40
}

export const fonts = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40,
    bold: '',
    light: '',
    medium: '',
  }

  const baseStyles = {
      container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      content: {
        flex: 1,
        marginHorizontal: 15
      }
  }

export default function createStyles(overrides = {}) {
    return StyleSheet.create({...baseStyles, ...overrides});
}