import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})

export default PickerItem;