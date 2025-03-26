import {combineReducers} from 'redux';
import auth from './auth/reducer';

// RootState Type (for Strong Typing)
const rootReducer = combineReducers({
  auth,
});

export type RootState = ReturnType<typeof rootReducer>; // Infer types from reducers

export default rootReducer;
