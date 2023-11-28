import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';
import { 
    View,
    Text,
    Button,
    Image,
   StyleSheet
     } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function Genres() { //IIE, 2023
  const [selectedGenre, setSelectedGenre] = useState();
    return (
      <View style={styles.container}>
        <Picker
      selectedValue={selectedGenre}
      onValueChange={(itemValue, itemIndex) =>
      setSelectedGenre(itemValue)
      }>
    <Picker.Item label="Fiction" value="Fiction" />
    <Picker.Item label="Fantasy" value="Fanstasy" />
    <Picker.Item label="Drama" value="Drama" />
    <Picker.Item label="Non-Fiction" value="Non-Fiction"/>
    </Picker>
      
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
});