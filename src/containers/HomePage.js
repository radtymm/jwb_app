import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image
} from 'react-native';

import {
    StackNavigator,
    TabNavigator
} from 'react-navigation';

import ChatScreen from './ChatScreen';
import MinePage from './MinePage';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' });
        }
      />
    );
  }
}

const HomePageApp = StackNavigator({
  Main: {screen: MainScreen},
  // Profile: {screen: ProfileScreen},
});


export default HomePageApp;
