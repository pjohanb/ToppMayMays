import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Image,
    StyleSheet,
    WebView,
    ScrollView,
    Vibration,
} from 'react-native';

export default class Front extends Component {
    naviger = (page) => {
        Vibration.vibrate(100);
        this.props.navigation.navigate(page);
    }


    //https://open.spotify.com/embed/track/4eWQlBRaTjPPUlzacqEeoQ
    static navigationOptions = {
        headerStyle: { backgroundColor: '#ff4500' },
        headerTitleStyle: { color: '#2a2a2a' },
    }

    componentDidMount() {
        Vibration.vibrate(500);
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.header} >Gudda Memes</Text>

                <View style={{ height: 100, width: 200 }} >
                    <WebView source={{ uri: "https://open.spotify.com/embed/track/4eWQlBRaTjPPUlzacqEeoQ" }} />
                </View>

                <View style={styles.buttonContainer} >
                    <ScrollView style={{ flex: 1 }} >
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => this.naviger('Biff')}
                        >
                            <Text style={styles.buttonText} >Biff på salg!</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => this.naviger('CC')}
                        >
                            <Text style={styles.buttonText} >Crowd Control!</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => this.naviger('NoRefunds')}
                        >
                            <Text style={styles.buttonText} >No Fucking Refund!</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => this.naviger('TrueStory')}
                        >
                            <Text style={styles.buttonText} >That's a True Story!</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => this.naviger('Pubge')}
                        >
                            <Text style={styles.buttonText} >Her d e pubge?</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => this.naviger('Ka')}
                        >
                            <Text style={styles.buttonText} >Ka!?!</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => this.naviger('Yotub')}
                        >
                            <Text style={styles.buttonText} >The boy who lived</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 60,
        backgroundColor: '#ff4500',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#2a2a2a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black'
    },
    header: {
        color: '#ff4500',
        fontSize: 30,
        marginTop: 10,
        marginBottom: 10
    }
})