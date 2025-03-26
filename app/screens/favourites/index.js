import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';

const Favourite = () => {
  const getStyles = styles();
  const eventData = useSelector(state => state.app);
  console.log('eventData ￠===== ⚛️ )', eventData);

  return (
    <View style={getStyles.root}>
      <Text>favourite</Text>
    </View>
  );
};

export default Favourite;
