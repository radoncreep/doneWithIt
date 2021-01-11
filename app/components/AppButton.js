import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

let custom;
export default function AppButton({ title, onPress, color="primary" }) {
   
    return (
        <TouchableOpacity 
            style={[styles.btn, { backgroundColor: colors[color]}]} 
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    btn: {
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    text: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})