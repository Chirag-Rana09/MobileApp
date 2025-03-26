import {Dispatch} from 'redux';

const actions = {
  SET_USER_DATA: 'auth/SET_USER_DATA',
  SET_ACCESS_TOKEN: 'auth/SET_ACCESS_TOKEN',
  SET_WALKTHROUGH: 'auth/SET_WALKTHROUGH',
  LOGOUT: 'auth/LOGOUT',
  SET_DARK_MODE: 'auth/SET_DARK_MODE',
  SET_LAST_SCREEN: 'auth/SET_LAST_SCREEN',
  SET_COMMON_DATA: 'auth/SET_COMMON_DATA',
  SET_THEME: 'auth/SET_THEME',
  SET_REMEMBER_ME_DATA: 'auth/SET_REMEMBER_ME_DATA',
  SET_LOGIN: 'auth/SET_LOGIN',
  SET_EVENT: 'auth/SET_EVENT',

  setUserData: (data: Record<string, any>) => (dispatch: Dispatch) => {
    dispatch({
      type: actions.SET_USER_DATA,
      userData: data,
    });
  },

  setEventData: (data: Record<string, any>) => (dispatch: Dispatch) => {
    dispatch({
      type: actions.SET_EVENT,
      eventData: data,
    });
  },

  setAccessToken: (accessToken: string) => (dispatch: Dispatch) => {
    dispatch({
      type: actions.SET_ACCESS_TOKEN,
      accessToken,
    });
  },

  setWalkThrough: (bool: boolean) => (dispatch: Dispatch) => {
    dispatch({
      type: actions.SET_WALKTHROUGH,
      walkThrough: bool,
    });
  },

  logOut: () => (dispatch: Dispatch) => {
    dispatch({
      type: actions.LOGOUT,
    });
  },

  setDarkMode: (darkMode: boolean) => (dispatch: Dispatch) => {
    dispatch({
      type: actions.SET_DARK_MODE,
      darkMode,
    });
  },

  setLastScreen: (lastScreen: string) => (dispatch: Dispatch) => {
    dispatch({
      type: actions.SET_LAST_SCREEN,
      lastScreen,
    });
  },

  setCommonData: (data: any) => (dispatch: Dispatch) => {
    dispatch({
      type: actions.SET_COMMON_DATA,
      commonData: data,
    });
  },

  setTheme: (theme: string) => (dispatch: Dispatch) => {
    dispatch({
      type: actions.SET_THEME,
      theme,
    });
  },

  setRememberMeData: (data: any) => (dispatch: Dispatch) => {
    dispatch({
      type: actions.SET_REMEMBER_ME_DATA,
      rememberMeData: data,
    });
  },

 
};

export default actions;
