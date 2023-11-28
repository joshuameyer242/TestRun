import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TextInput
     } from 'react-native';
     import {NavigationContainer} from '@react-navigation/native';
     import { createNativeStackNavigator } from '@react-navigation/native-stack';
     import AsyncStorage from '@react-native-async-storage/async-storage';
     import { useState } from 'react';

     
     const Stack= createNativeStackNavigator();
     
     export default function AddBook({navigation}) { //IIE, 2023
     const [authorName, setBookAuthor] = useState('');
     const [bookName, setBookName] = useState('');
     const [genreName, setBookGenre] = useState('');
     const [pagesCount, setNumberOfPages] = useState('');
     const [totalPages, setTotalPages] = useState(0)

     const MAX_RECENT_BOOKS = 5;

const addBook = async () => {
  const pages = parseInt(bookPages, 10);
  if (bookName && !isNaN(pages) && genreName && authorName) {
    let existingBooks = [];
    try {
      const storedBooks = await AsyncStorage.getItem('bookList');
      if (storedBooks) {
        existingBooks = JSON.parse(storedBooks);
      }

      const newBook = {
        name: bookName,
        pages,
        genre: genreName,
        author: bookName,
      };
      existingBooks.push(newBook);

      const recentBooks = existingBooks.slice(-MAX_RECENT_BOOKS);
      await AsyncStorage.setItem('bookList', JSON.stringify(recentBooks));

      setBookName('');
      setBookPages('');
      setBookGenre('');
      setBookAuthor('');
    } catch (error) {
      console.error('Error saving book details:', error);
    }
  }
};
         return (
         <View style={styles.container}>
             <StatusBar style="auto" /> 
             <Text style={styles.heading}>Add Book</Text>
             <View style={styles.formItems}>
     <Text>Name of Author:</Text>
            <TextInput
             value={authorName} style={styles.horisontalLayout}
             placeholder="Author" onChangeText={setBookAuthor}
             />
     
     <Text>Name of Book:</Text>
             <TextInput value={bookName}
             style={styles.horisontalLayout}
             placeholder="Name of Book" onChangeText={setBookName} />
     
     <Text>Genre of Book:</Text>
             <TextInput value={genreName}
             style={styles.horisontalLayout}
             placeholder="Genre" onChangeText={setBookGenre} />
     
     <Text>Number of Pages:</Text>
             <TextInput value={pagesCount}
             style={styles.horisontalLayout}
             placeholder="Number of Pages" onChangeText={setNumberOfPages}/>
       
             <Button title="Add Book" color="green"
               onPress={() => { {AddBook} {addBook}
               const pages = parseInt(pagesCount, 10); 
             if (bookName && !isNaN(pages)) {
             navigation.navigate('Home', { bookName, pages, authorName, genreName });
             setTotalPages(totalPages + pages);
             setBookName('');
             setNumberOfPages('');
             setBookAuthor('');
             setBookGenre('');
     
                       };
                 console.log(
                   'Author: ' + authorName + ',' + ' Book Title: ' + bookName + ',' + ' Genre: ' + genreName + ','+ 'Number of Pages: ' + pagesCount)
                   navigation.navigate('Home', {bookName , pages, authorName, pagesCount, genreName});                   
                   }} />
                 </View>
                   
           </View>
     
           
           );
       };
      
     
     
       
       
       
       const styles = StyleSheet.create({
         formItems: {
           paddingLeft: 20,
           flex: 2,
           width: 150,
           fontSize: 50,
           height: 50,
         },
         container: {
           flex: 2,
           justifyContent: 'flex-start',
           alignContent: 'center',
           backgroundColor: '#6DF956'
         },
         buttons: {
           flex: 1,
           paddingBottom: 20,
         },
         heading: {
           backgroundColor: '#98FB98',
            fontSize: 36,
            textAlign: 'center',
            textAlignVertical: 'center'
           },
     
         lastRead: {
           fontSize: 16,
           textAlign: 'center',
           color: '#000000',
           backgroundColor: '#4FE039',
           width: 500,
         }, //IIE, 2023
     
         horisontalLayout: {
           flex: 0.1,
           justifyContent: 'flex-start',
           marginTop: 5,
           marginBottom: 15,
           width: 200,
           backgroundColor: '#ffffff',
           opacity: 25,
         }
       });