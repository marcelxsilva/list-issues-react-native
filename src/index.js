import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import './config/reactotronConfig';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <>
      <StatusBar barStyle='light-content' backgroundColor='#3498DB'/>
      <Routes />
      </>
    );
  }
};

export default App;
