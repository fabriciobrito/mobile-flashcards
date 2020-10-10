import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import Main from './navigation/TabNavigator';

export default function App() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <Main />
    </Provider>
  );
}