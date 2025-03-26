import React, {useState} from 'react';
import {ActivityIndicator, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import NavStart from './app/navigation/stackNavigation';
import {ThemeProvider} from '@react-navigation/native';
import {persistor, store} from '@redux/store/configureStore';

export default function App() {
  const [loading, setLoading] = useState(true);

  function onBeforeLift() {
    if (store) {
      setLoading(false);
    }
  }

  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator />}
          persistor={persistor}
          onBeforeLift={onBeforeLift}>
          {loading ? <ActivityIndicator /> : <NavStart />}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
