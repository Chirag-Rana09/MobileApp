import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import CCard from '@components/CCard';
import {useDispatch} from 'react-redux';
import authActions from '../../redux/reducers/auth/actions';

const Event = () => {
  const getStyles = styles();
  const [eventArr, setEventArr] = useState([]);
  const dispatch = useDispatch();
  const {setEventData} = authActions;

  const List = async () => {
    const url = 'http://3.7.81.243/projects/plie-api/public/api/events-listing';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {},
        body: {},
      });

      const result = await response.json();
      console.log('Response:', result);
      setEventArr(result?.data?.events);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    List();
  }, []);

  useEffect(() => {
    const arr = eventArr?.filter(item => item?.isFavorite);
    console.log('arr ￠===== ⚛️ )', arr);
    dispatch(setEventData(arr));
  }, [eventArr]);

  const toggleFavorite = id => {
    setEventArr(prevEvents =>
      prevEvents.map(event =>
        event.event_date_id === id
          ? {...event, isFavorite: !event.isFavorite}
          : event,
      ),
    );
  };
  return (
    <View style={getStyles.root}>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={eventArr}
        renderItem={({item}) => {
          return (
            <View>
              <CCard
                data={item}
                handlePress={() => toggleFavorite(item.event_date_id)}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Event;
