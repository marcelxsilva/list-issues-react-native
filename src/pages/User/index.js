import React, { Component } from 'react';
import api from '../../services/api';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// import { Container } from './styles';

export default class User extends Component {

  static navigationOptions = {
    title: 'Usuários'
  }

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  }
  state = {
    stars: [],
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);
    this.setState({ stars: response.data });

  }
  render() {
    const { stars } = this.state;
    return <View />;
  }
}
