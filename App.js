import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter: 0,
};

function reducers(state, action) {
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return {...state, counter: state.counter + 1};
    default:
      return state;
  }
}

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <First />
      <Second />
    </SafeAreaView>
  );
};

const First = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#eceff1'}}>
      <Text>First</Text>
    </View>
  );
};

const Second = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Second</Text>
    </View>
  );
};
