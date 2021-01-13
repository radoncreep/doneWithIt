import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../config/colors';
function MainListing({ image, description, price}) {
    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity>
                <Image style={styles.image} source={image}/>
            </TouchableOpacity>
            <View style={styles.cardInfo}>
                <Text style={styles.desc}>{description}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 20,
        overflow: 'hidden',
        borderRadius: 15,
        backgroundColor: '#fff'
    },
    cardInfo: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    image: {
        width: '100%',
        height: 200,
    },
    price: {
        fontSize: 14,
        fontWeight: "500",
        color: colors.secondary
    },
    desc: {
        fontSize: 14,
        fontWeight: "600",
        color: colors.black,
        marginBottom: 5
    }
})

export default MainListing;