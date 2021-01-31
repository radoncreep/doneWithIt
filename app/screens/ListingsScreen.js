import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from '../api/listings';
import { getListings } from '../api/listings';

import routes from '../navigation/routes';
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";


function ListingsScreen({ navigation }) {
  // for a case where we have multiple api calls from this component
  // we cant use object distructuring
  const getListingsApi = (listingsApi.getListings);
  
  useEffect(() => {
    getListingsApi.request(a, b, c);
  }, []);
  
  return (
    <Screen style={styles.screen}>
      {error && (<>
        <Text>Couldn't retrieve the listings.</Text>
        <Button title="Retry" onPress={loadingListings} />
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
