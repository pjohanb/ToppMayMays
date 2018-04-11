import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Image,
    Dimensions,
    StyleSheet,
    WebView
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class Yotub extends Component {
    static navigationOptions = {
        headerStyle: { backgroundColor: '#ff4500' },
        headerTitleStyle: { color: '#2a2a2a' },
    }
    render() {
        return (
                <WebView source={{ uri: 'https://youtu.be/S02kaxCg910?t=82' }} />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: WIDTH,
        height: HEIGHT,
    },
    container: {
        backgroundColor: '#2a2a2a',
        alignContent: 'center',
        alignItems: 'center',
    },
    header: {
        color: '#ff4500',
        fontSize: 30,
        marginTop: 10
    },
})