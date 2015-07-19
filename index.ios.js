var React = require('react-native');
var {View, Text, StyleSheet, TouchableOpacity, AppRegistry} = React;

class HelloThere extends React.Component {
  clickMe() {
    alert('Hi!');
  }
  render() {
    return (
      <TouchableOpacity onPress={this.clickMe.bind(this)}>
        <View style={styles.box}>
          <Text>Hello {this.props.name}. Please click me.</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    marginTop: 100
  }
});

var MainComponent = function() {
  this.render = function() {
    return <HelloThere name="Component" />;
  }
};

AppRegistry.registerComponent('MainComponent', function() {
  return MainComponent;
});
