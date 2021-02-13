import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Card from "../components/Card";
import colors from "../config/colors";
import { getListings } from '../api/listings';

import routes from '../navigation/routes';
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";
import { ListItemSeparator } from "../components/lists";


function ListingsScreen({ navigation }) {
  // for a case where we have multiple api calls from this component
  // we cant use object distructuring
  const getListingsApi = useApi();
  
  useEffect(() => {
    getListingsApi.request();
  }, []);
  
  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (<>
        <Text>Couldn't retrieve the listings.</Text>
        <Button title="Retry" onPress={getListingsApi} />
      </>)}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
