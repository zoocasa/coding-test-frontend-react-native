/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

import data from './data';
import {styles} from './styles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.heading}>
            Welcome to Zoocasa's Frontend Coding Test
          </Text>
          <Image source={{uri: data[0].imageUrl}} style={styles.image} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
