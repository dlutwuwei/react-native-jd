var React = require('react-native');

var {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  ListView
} = React;


var block = React.createClass({
	getInitialState: function () {
		return {}
		// body...
	},
	render: function(){
		return (
			<View style={this.props.style}>
				<View style={styles.title}>
					<View style={styles.titleTextWrap}>
						<Text style={styles.titleText}>{this.props.title}</Text>
					</View>
				</View>
				{this.props.children}
			</View>)
	}
});

var styles = StyleSheet.create({
	title:{
		height:30,
		borderBottomWidth:1,
		borderBottomColor: '#efefef'
	},
	titleTextWrap:{
		borderLeftColor:'#D85059',
		borderLeftWidth:3,
		marginLeft:3,
		height:12,
		marginTop:8,
		marginBottom:8,
	},
	titleText:{
		fontSize: 12,
		lineHeight:12,
		paddingLeft: 9,	
	},
	content:{
		height:100
	}
});

module.exports = block;