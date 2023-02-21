import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ControlTypes {
  isRunning: Boolean;
  handleLeftButtonPress: () => void;
  handleRightButtonPress: () => void;
}

const Control = ({
  isRunning,
  handleLeftButtonPress,
  handleRightButtonPress,
}: ControlTypes) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          {backgroundColor: isRunning ? '#33333' : '#1c1c1e'},
        ]}
        onPress={handleLeftButtonPress}>
        <View style={styles.controlButton}>
          <Text style={{color: isRunning ? '#fff' : '#9d9ca2'}}>
            {isRunning ? 'Lap' : 'Reset'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          {backgroundColor: isRunning ? '#350e0d' : '#0a2a12'},
        ]}
        onPress={handleRightButtonPress}>
        <View style={styles.controlButton}>
          <Text style={{color: isRunning ? '#ea4c49' : '#37d05c'}}>
            {isRunning ? 'Stop' : 'Start'}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  controlButtonBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  controlButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default React.memo(Control);
