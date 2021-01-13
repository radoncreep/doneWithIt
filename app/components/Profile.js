import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors'
function Profile({ name, email, image }) {
    return (
        <View style={styles.profileContainer}>
            <Image style={styles.profiePhoto} source={image}/>
            <View style={styles.detailsWrapper}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsWrapper: {
        paddingVertical: 10
    },
    profileContainer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    profiePhoto: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 20
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    email: {
        fontSize: 14,
        color: colors.medium
    }
})
export default Profile;