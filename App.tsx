import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation/Navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Navigation />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
