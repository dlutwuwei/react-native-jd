var React = require('react-native');

var {
  Text,
  View,
  StyleSheet
} = React;

var EmptyPage = React.createClass({

  render: function() {
    return (
      <View style={styles.emptyPage}>
        <Text style={styles.emptyPageText}>
          {this.props.text}
        </Text>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  emptyPage:{},
  emptyPageText:{}
});
module.exports = EmptyPage;