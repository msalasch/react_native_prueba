import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { Icon } from 'react-native-elements';

import Form from '../src/components/Form'

// const TabBarComponent = (props) => (<BottomTabBar {...props} />);

export class Main extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='save' size={25} color={tintColor} />;
    }
  };
  render() {
    return (
      <View>
        <Form />
      </View>
    );
  }
}


export class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='home' size={25} color={tintColor} />;
    }
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }
}

export class Profile extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='person' size={25} color={tintColor} />;
    }
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  Main: { screen: Main },
  Profile: { screen: Profile },
},
  {
    initialRouteName: 'Main',
    tabBarOptions: {
      showLabel: false,
    },
  },
);

export const Tabs = createAppContainer(TabNavigator);