import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    FlatList
     } from 'react-native';
     import {NavigationContainer} from '@react-navigation/native';
     import { createNativeStackNavigator } from '@react-navigation/native-stack';
     import { useState, useEffect } from 'react';
     import AsyncStorage from '@react-native-async-storage/async-storage';
     import AddBook from './AddBook';

     const Stack = createNativeStackNavigator();

     const MAX_RECENT_BOOKS = 3;

export default function HistoryScreen() {
  const [recentBooks, setRecentBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const storedBooks = await AsyncStorage.getItem('bookList');
        if (storedBooks) {
          const allBooks = JSON.parse(storedBooks);

          // Get the most recent MAX_RECENT_BOOKS
          const recent = allBooks.slice(-MAX_RECENT_BOOKS);

          setRecentBooks(recent);
        }
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <View>
      <Text>Most Recent Books:</Text>
      <FlatList
        data={recentBooks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index}>
            <Text>Name: {item.name}</Text>
            <Text>Pages: {item.pages}</Text>
            <Text>Genre: {item.genre}</Text>
            <Text>Author: {item.author}</Text>
          </View>
        )}
      />
    </View>
  );
}
       
       const styles = StyleSheet.create({
         container: {
           flex: 3,
           alignItems: 'center',
           justifyContent: 'center',
           backgroundColor: '#6DF956'
         },
         heading:{
          backgroundColor: '#5AF598',
          fontSize: 36,
          flex: 1,
          width: 500,
          textAlign: 'center',
          textAlignVertical: 'center'
         } //IIE, 2023
       });