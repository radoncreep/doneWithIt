import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItemSeperator from '../components/ListItemSeperator';
import MainListing from '../components/MainListing';
import Screen from '../components/Screen';
import colors from '../config/colors';

const contents = [
    {
        id: 1,
        description: "Red jacket for sale",
        price: "100",
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        description: "Comfortable couch for sale",
        price: "200",
        image: require('../assets/couch.jpg')
    },
    {
        id: 3,
        description: "Comfortable couch for sale",
        price: "200",
        image: require('../assets/jacket.jpg')
    },
]
function ListingsScreen(props) {
    return (
        <Screen>
            <FlatList style={styles.listContainer}
                data={contents}
                keyExtractor={contents.id}
                renderItem={({ item }) => (
                    <MainListing
                        image={item.image}
                        description={item.description} 
                        price={item.price}
                        />
                )}
                ItemSeparatorComponent={ListItemSeperator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: colors.light,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
})

export default ListingsScreen;