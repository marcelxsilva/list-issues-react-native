import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import './config/reactotronConfig';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40
  }
})
export default App;
