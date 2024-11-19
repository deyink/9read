import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import PdfViewerScreen from "./screens/PdfViewerScreen";



const RootStack = createNativeStackNavigator({
  screens:{
    Home:HomeScreen,
    PDF: PdfViewerScreen
  }
});

const Navigation = createStaticNavigation(RootStack)

export default function App(){
  return (
    <Navigation/>
  )
}