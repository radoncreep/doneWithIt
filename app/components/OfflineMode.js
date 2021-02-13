import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import colors from '../config/colors';
import Constants from 'expo-constants';

function OfflineMode(props) {
    const netInfo = useNetInfo();
    console.log(Constants)
    
    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>No Internet Connection</Text>
        </View>
    );

    return null;
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        top: 50,
        width: '100%',
        zIndex: 1
    },
    text: {
        color: colors.white
    }
})

export default OfflineMode;