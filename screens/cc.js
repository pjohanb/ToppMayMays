import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class CC extends Component {
    static navigationOptions = {
        headerStyle: { backgroundColor: '#ff4500' },
        headerTitleStyle: { color: '#2a2a2a' },
      }
    render() {
        return (
            <View style={styles.container} >
                <Image
                    style={styles.image}
                    source={require('../assets/images/cc.png')}
                    resizeMode="contain"
                />
            </View>
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
    }
})