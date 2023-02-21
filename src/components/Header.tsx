import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={{backgroundColor: 'black', alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 20, marginTop: 10}}>
        Stopwatch
      </Text>
    </View>
  );
};

export default Header;
