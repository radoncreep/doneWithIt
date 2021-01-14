import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreenItem from '../components/AccountScreenItem';
import ListItemSeperator from '../components/ListItemSeperator';
import Profile from '../components/Profile';

import Screen from '../components/Screen';
import colors from '../config/colors';

const user = {
    name: "Victor Mosh",
    email: "victormosh@mail.com",
    imageurl: require('../assets/bc099c74-9c61-4395-ae6d-813e0367b4e1.jpg')
};
function MyAccountScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                {/* use a single compoonent ro render a listItem */}
                <Profile name={user.name} email={user.email} image={user.imageurl} />
                
                {/* use a flat list */}
                <View style={styles.items}>
                    <AccountScreenItem name="format-list-bulleted" iconColor="primary" weight="bold">
                        My Listings
                    </AccountScreenItem>
                    <ListItemSeperator />
                    <AccountScreenItem name="email" iconColor="secondary" weight="bold">
                        My Messages
                    </AccountScreenItem>
                </View>
                <View style={styles.logout} >
                    <AccountScreenItem name="logout" iconColor="yellow" weight="500">
                        Log Out
                    </AccountScreenItem>
                </View>
            </View>

        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        flex: 1,
        paddingTop: 25
    },
    items: {
        backgroundColor: '#fff',
        marginTop: 50
    },
    logout: {
        marginTop: 25,
        backgroundColor: '#fff',
    }
})

export default MyAccountScreen;