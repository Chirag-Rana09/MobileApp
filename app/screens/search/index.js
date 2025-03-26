import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Search = () => {
  const getStyles = styles();

  return (
    <View style={getStyles.root}>
      <Text>Search</Text>
    </View>
  );
};

export default Search;
