import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import colors from '../config/colors'
import ListItem from './ListItem'
const ListingDetailsScreen = () => {
    return (
        <View style={{ paddingTop: 70 }}>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>Red Jacket for sale</Text>
                <Text style={styles.price}>$100</Text>
                <View style={styles.userContainer}>
                <ListItem 
                    image={require('../assets/bc099c74-9c61-4395-ae6d-813e0367b4e1.jpg')}
                    title="Victor Mosh"
                    subTitle="5 Listings"
                />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        fontSize: 20
    },
    price: {
        color: colors.secondary,
        fontWeight: "500"
    },
    userContainer: {
        marginVertical: 2
    }
})
export default ListingDetailsScreen
