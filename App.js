import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const initialState = {
counter:0,
};

function reducers(state, action){
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter+1};
    default:
      return state;
  }
}

export default () => {
  return (
    <SafeAreaView>
      <Text>Hello Redux</Text>
    </SafeAreaView>
  );
};

const First = () => {
  return (

);
};
