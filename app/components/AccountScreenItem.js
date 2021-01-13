import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../config/colors';
function AccountScreenItem({ icon, text, name, children, iconColor, weight }) {
    console.log(colors.light)
    return (
        <TouchableHighlight underlayColor="lightgrey" onPress={() => console.log('pre')}>
            <View style={styles.wrapper}>
                <View style={[styles.iconContainer, { backgroundColor: colors[iconColor] }]}>
                    <MaterialCommunityIcons 
                        name={name}
                        size={30}
                        color="#fff"
                    />
                </View>
                <Text style={{ fontWeight: weight }}>{children}</Text>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    wrapper: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15
    }
});

export default AccountScreenItem;