var React = require('react-native');


var {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  WebView
} = React;

var webView = React.createClass({
	render: function() {
		return (
			<WebView
	          ref=''
	          automaticallyAdjustContentInsets={true}
	          style={styles.webView}
	          url={this.props.url}
	          startInLoadingState={true}
	          javaScriptEnabledAndroid={true}
	          startInLoadingState={true}
	          scalesPageToFit={true}
	          bounces={true}/>
        )
	}
});

var styles = StyleSheet.create({
    webView: {
        flex: 1,
        marginBottom:0,
        marginTop:0
    }
});

module.exports = webView;