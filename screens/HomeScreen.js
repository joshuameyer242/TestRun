import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TextInput
     } from 'react-native';
     import { useState, useEffect } from 'react'; //IIE,2023
     import {NavigationContainer} from '@react-navigation/native';
     import { createNativeStackNavigator } from '@react-navigation/native-stack';
     import AddBook from './AddBook';
     import History from './History';
     import Genres from './Genres';
     import BookImage from '../assets/images/book.jpg'
     import AsyncStorage from '@react-native-async-storage/async-storage';
     
     
     const Stack= createNativeStackNavigator();
     
     export default function HomeScreen({ navigation, route }) { //IIE, 2023
       const { bookName, pages, authorName, genreName} = route.params || {};
       const [books, setBooks] = useState([]);
       const [totalPagesRead, setTotalPagesRead] = useState(0);
     
       useEffect(() => {
         if (bookName && pages) {
           setBooks([...books, bookName]);
           setTotalPagesRead(totalPagesRead + pages);
         }
       }, [bookName, pages, authorName, genreName]);
       
       const averagePages = books.length > 0 ? totalPagesRead / books.length : 0; //IIE, 2023
         return (
           <View style={styles.container}> 
           <View>
             <Text style={styles.heading}>Home Page</Text>
           </View>
           <Image source={require('../assets/images/book.jpg')} style={styles.image} />
           <View style={styles.lastRead}>
           <Text>Last book read: <Text style={styles.textStyle}>{bookName}</Text> by <Text style={styles.textStyle}>{authorName}</Text></Text>
           <Text>Genre: <Text style={styles.textStyle}>{genreName}</Text></Text>
           </View>
           <View style={{backgroundColor:"#98FB98", width: 300, height: 100}}>
           <Text>Total Pages Read: <Text style={styles.textStyle}>{totalPagesRead}</Text></Text>
           <Text>Average Pages Read: <Text style={styles.textStyle}>{averagePages}</Text></Text>
           </View>
             <View style={styles.bottomBanner}>
     
             </View>
             <StatusBar style="auto" /> 
           </View>
         );
       };
       
       const styles = StyleSheet.create({
         textStyle:{
           backgroundColor: '#7FFF00',
           fontSize: 20,
         },
     
         image :{
           flex: 1,
           height: 200,
           width:300,
           justifyContent: 'flex-start',
           backgroundColor: '#000000', 
         },
         container: {
           flex: 1,
           alignItems: 'center',
           justifyContent: 'center',
           backgroundColor: '#6DF956'
         },
         buttons: {
           flex: 1,
           width: 350,
           height: 200,
           justifyContent:'space-between',
           fontSize: 20,
     
         },
         lastRead: {
           flex: 0.2,
           textAlign: 'center',
           backgroundColor: '#4FE039',
           width: 300,
           fontSize: 20,
         }, //IIE, 2023
     
         bottomBanner: {
           flex: 1,
           backgroundColor: 'light-green'
         },
         heading: {
         backgroundColor: '#98FB98',
          fontSize: 36,
          textAlign: 'center',
          textAlignVertical: 'center'
         }
     
       });