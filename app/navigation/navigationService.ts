import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

// Define the type for navigationRef
export const navigationRef = React.createRef<NavigationContainerRef<any>>();
export const homeRef = React.createRef<NavigationContainerRef<any>>();

// Define function types
function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};
