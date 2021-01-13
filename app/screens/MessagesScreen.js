import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Constants from "expo-constants";

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/bc099c74-9c61-4395-ae6d-813e0367b4e1.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/bc099c74-9c61-4395-ae6d-813e0367b4e1.jpg')
    }
];
function MessagesScreen(props) {
    const [ messages, setMessages ] = useState(initialMessages);
    const [ refresh, setRefreshing ] = useState(false);

    const handleDelete = message => {
        // Delete the messagge from messages array
        const newMessages =  messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
        // setMessages(messages.filter(m => m.id !== message.id))
    }
    return (
        <Screen onPress={() => console.log('touched me')}>
            <FlatList
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({ item }) => <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('message selected', item)}
                    renderRightActions={() => 
                        <ListItemDeleteAction onPress={() => handleDelete(item)}
                    />}
                />}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refresh}
                // call the backend to retrievve a new list of messages but for now lets simulate this on the client
                onRefresh={() => { // swiping down on refresh we want to load or get a new state
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/bc099c74-9c61-4395-ae6d-813e0367b4e1.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        // paddingTop: Constants.statusBarHeight
    }
})

export default MessagesScreen;