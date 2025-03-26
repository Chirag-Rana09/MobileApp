import thunk, { ThunkMiddleware } from 'redux-thunk';
import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer, { RootState } from '../reducers/rootReducer';

// Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

// Persisted Reducer
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

// Store Setup
const store: Store<RootState> = createStore(
  persistedReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState>)
);

const persistor: Persistor = persistStore(store);

export { store, persistor };
