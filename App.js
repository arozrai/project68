import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import In from './screens/fb'
import Fb from "./screens/fb"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"

export default class App extends React.Component () {
  render(){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:Fb},
  Instagram:{screen:In}
})

const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
