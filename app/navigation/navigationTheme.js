import { DefaultTheme } from '@react-navigation/native';
import colors from '../config/colors';

// default theme is a js object with a bunch of props
export default {
    ...DefaultTheme,
    color: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white
    }
};