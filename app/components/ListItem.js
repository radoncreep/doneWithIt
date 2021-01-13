import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'

import colors from '../config/colors'
function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                onPress={onPress}
                underlayColor={colors.light}
                >
                <View style={styles.container}>
                    <Image style={styles.image} source={image}/>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    subTitle: {
        color: '#6e6969'
    },  
    title: {
        fontWeight: "500"
    },
})
export default ListItem;