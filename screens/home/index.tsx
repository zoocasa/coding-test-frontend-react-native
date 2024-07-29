import React from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import data from '../../data';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Listing: undefined;
};
type Props = NativeStackScreenProps<RootStackParamList>;

function Home({ navigation }: Props): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Welcome to Zoocasa's Frontend Coding Test
      </Text>
      <Image source={{uri: data[0].imageUrl}} style={styles.image} />
    </SafeAreaView>
  );
}

export default Home;
