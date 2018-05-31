import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, AppRegistry, Alert, Platform} from 'react-native';

class HelloThere extends React.Component {
  clickMe() {
    Alert.alert(Platform.select({
        ios: 'Welcome to iOS!',
      android: 'Welcome to Android!'
    }));
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.clickMe.bind(this)}>
          <View style={styles.box}>
            <Text>Hello {this.props.name}. Please click me.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  box: {
    borderColor: 'red',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    width: 100,
    height: 100
  }
});

class MainComponent extends React.Component {
  render() {
    return <HelloThere name="Component" />;
  }
};

AppRegistry.registerComponent('MainComponent', function() {
  return MainComponent;
});
