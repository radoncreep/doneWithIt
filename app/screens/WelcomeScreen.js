import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native';

import AppButton from '../components/AppButton';
export default function WelcomeScreen() {
    return (
        <ImageBackground
            blurRadius={3}
            source={require('../assets/background.jpg')} style={styles.bgImg}
            >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagline}>Sell what you dont need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => console.log('Tapped')}/>
                <AppButton title="Register" color="secondary" onPress={() => console.log('Tapped')}/>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 15,
        width: "100%"
    },
    bgImg: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    loginBtn: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    registerBtn: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ECDC4",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 20
    }
});
