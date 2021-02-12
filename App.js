import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {round, swapCourse} from '@helpers'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Rounded 1.123123: {round(99.99999, 3)}!</Text>
      <Text>Swapp course 0,002: {swapCourse(0.1)}!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
