import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Timer = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 30}}>Timer</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
