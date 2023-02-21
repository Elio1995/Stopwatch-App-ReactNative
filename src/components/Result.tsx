import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {displayTime} from './util';

interface ResultProps {
  results: Number[];
}

const Result = ({results}: ResultProps) => {
  return (
    <ScrollView>
      <View style={styles.resultItem} />
      {results?.map((item: Number, index: any) => (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.resultItemText}>
            Lap{results?.length - index}
          </Text>
          <Text style={styles.resultItemText}>{displayTime(item)}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#313131',
    height: 50,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  resultItemText: {
    color: '#fff',
  },
});

export default React.memo(Result);
