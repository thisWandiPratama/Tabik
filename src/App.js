import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import navigate from './navigations/navigate';

const AppContainer = createAppContainer(navigate);

export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}
