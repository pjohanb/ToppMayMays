import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import front from './screens/front';
import biff from './screens/biff';
import cc from './screens/cc';
import norefunds from './screens/norefunds';
import truestory from './screens/truestory';
import pubge from './screens/pubge';
import ka from './screens/ka';
import yotub from './screens/yotub';

const GuddaMemes = StackNavigator (
  {
    Front: {
      screen: front,
    },
    Biff: {
      screen: biff,
    },
    TrueStory: {
      screen: truestory,
    },
    CC: {
      screen: cc,
    },
    NoRefunds: {
      screen: norefunds,
    },
    Pubge: {
      screen: pubge,
    },
    Ka: {
      screen: ka,
    },
    Yotub: {
      screen: yotub,
    }
  }
)

export default class App extends Component {
  render() {
    return (
      <GuddaMemes />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
