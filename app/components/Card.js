import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';
const Card = ({ title, subTitle, image }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text>{title}</Text>
                <Text style={ {color: colors.secondary, fontWeight: 'bold' } }>{subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginBottom: 7
    }
})

export default Card;
