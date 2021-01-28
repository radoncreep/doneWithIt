import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Alert, Button, Image } from "react-native";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";
import colors from "./app/config/colors";
import ImageInputlist from "./app/components/ImageInputlist";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  
  return <ListingEditScreen />
    
};