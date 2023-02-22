import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const WorldClock = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 30}}>WorldClock</Text>
    </View>
  );
};

export default WorldClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
