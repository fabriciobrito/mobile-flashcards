import * as React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import Main from './navigation/TabNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <Main />
      </Provider>
    );
  }
}