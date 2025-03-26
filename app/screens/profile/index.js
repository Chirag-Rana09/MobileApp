import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Profile = () => {
  const getStyles = styles();

  return (
    <View style={getStyles.root}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
