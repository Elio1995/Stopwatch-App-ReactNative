import React from 'react';
import {View, StyleSheet} from 'react-native';
import Stopwatch from './src/components/Stopwatch';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      {/* <StatusBar /> */}
      <Stopwatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
