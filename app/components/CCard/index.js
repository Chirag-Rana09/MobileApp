import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const CCard = ({data, handlePress = () => {}}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: data?.event_profile_img}}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {data?.event_name}
        </Text>
        <Text style={styles.date}>{data?.readable_from_date}</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.priceRange}>
            {data?.event_price_from} {data?.event_price_to || '-'}
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 5}}>
          {data?.keywords?.map(item => {
            return (
              <Text
                style={{
                  padding: 5,
                  margin: 2,
                  borderRadius: 5,
                  backgroundColor: 'gray',
                }}>
                {item}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/back.png')} />
        </TouchableOpacity>
        <Text style={styles.location}>
          {data?.city}, {data?.country}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/share.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            {data?.isFavorite ? (
              <Image source={require('../../assets/images/heartColor.png')} />
            ) : (
              <Image source={require('../../assets/images/heart.png')} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 15,
    overflow: 'hidden',
  },
  imageContainer: {
    width: 120,
  },
  image: {
    width: '100%',
    height: 100,
  },
  contentContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 14,
  },
  date: {
    fontSize: 12,
    color: 'green',
    marginBottom: 3,
  },
  location: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceRange: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  type: {
    fontSize: 12,
    color: '#666',
  },
  iconContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
  },
  shareIcon: {
    fontSize: 20,
    color: '#666',
  },
  favoriteIcon: {
    fontSize: 20,
    color: '#666',
  },
});

export default CCard;
