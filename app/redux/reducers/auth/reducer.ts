import {Appearance} from 'react-native';
import types from './actions';

// Define State Type
interface AuthState {
  userData: Record<string, any>;
  accessToken: string;
  darkMode: boolean;
  walkThrough: boolean;
  lastScreen: string;
  theme: string;
  commonData?: any;
  rememberMeData?: any;
  eventData?:any;
}

// Define Action Type
interface AuthAction {
  type: string;
  [key: string]: any;
}

// Initial State
const initialState: AuthState = {
  userData: {},
  eventData: [],
  accessToken: '',
  darkMode: Appearance.getColorScheme() === 'dark',
  walkThrough: true,
  lastScreen: '',
  theme: 'systemDefault',
};

// Reducer Function
export default function reducer(
  state: AuthState = initialState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case 'persist/REHYDRATE':
      if (
        action.payload &&
        action.payload.auth &&
        action.payload.auth.introShown
      ) {
        return {
          ...state,
          ...action.payload.auth,
          introShown: false,
        };
      }
      return state;
    case types.SET_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };

      case types.SET_EVENT:
        return {
          ...state,
          eventData: action.eventData,
        };

    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case types.SET_WALKTHROUGH:
      return {
        ...state,
        walkThrough: action.walkThrough,
      };
    case types.SET_LAST_SCREEN:
      return {
        ...state,
        lastScreen: action.lastScreen,
      };
    case types.LOGOUT:
      return {
        ...initialState,
        commonData: state.commonData,
      };
    case types.SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.darkMode,
      };
    case types.SET_COMMON_DATA:
      return {
        ...state,
        commonData: action.commonData,
      };
    case types.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case types.SET_REMEMBER_ME_DATA:
      return {
        ...state,
        rememberMeData: action.rememberMeData,
      };
    default:
      return state;
  }
}
