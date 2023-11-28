import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
View,
Text,
Button,
Image,
StyleSheet,
 } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddBook from './screens/AddBook';
import Genres from './screens/Genres';
import History from './screens/History';
import HomeScreen from './screens/HomeScreen';

const Tab = createBottomTabNavigator();
export default function App() {

    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{tabBarLabel: "Home", tabBarIcon:({color, size})=>(<MaterialCommunityIcons 
            name="home" color={color} size={size}/>)}}

          />
      <Tab.Screen 
            name="AddBook"
            component={AddBook}
            options={{tabBarLabel: "Add Book", tabBarIcon:({color, size})=>(<MaterialCommunityIcons 
              name="plus" color={color} size={size}/>)}}
            />

      <Tab.Screen
       name="Genres"
       component={Genres}
       options={{tabBarLabel: "Genres", tabBarIcon:({color, size})=>(<MaterialCommunityIcons 
        name="dots-vertical" color={color} size={size}/>)}}
       />

      <Tab.Screen
       name="History"
       component={History}
       options={{tabBarLabel: "History", tabBarIcon:({color, size})=>(<MaterialCommunityIcons 
        name="view-list" color={color} size={size}/>)}}
       />
          </Tab.Navigator>
      </NavigationContainer>
      
    )
};
