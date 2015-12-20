var React = require('react-native');

var {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} = React;

var EmptyPage = require('./EmptyPage.js');

var floor = React.createClass({
	getInitialState: function () {
		return {}
		// body...
	},
	onPress: function(){
      this.props.navigator.push({
        title: 'emptyPage',
        component: EmptyPage,
      });
  	},
	render: function(){
		var imgs = [
			'http://m.360buyimg.com/mobilecms/jfs/t2284/330/1341660348/17341/fb3d67af/5653d4ffN6b65b208.jpg',
			'http://m.360buyimg.com/mobilecms/jfs/t2083/3/1750220277/18813/ed086582/5673eea3N03b53633.jpg',
			'http://m.360buyimg.com/mobilecms/jfs/t2473/147/1745658951/30614/eb1cb0a1/5673f0d0N31b54ff1.jpg'
		];
		var self = this;
		return (
			<View style={[this.props.style, styles.panel]}>
				<View style={styles.left}>
					<TouchableOpacity onPress={self.onPress}>    
						<View>
							<Image
							  style={styles.left}
							  source={{uri:imgs[0]}} />
					    </View>
					</TouchableOpacity>
				</View>
				<View style={styles.right}>
					<TouchableOpacity onPress={self.onPress}>    
						<View>
							<Image
							  style={styles.small}
							  source={{uri:imgs[1]}} />
					    </View>
					</TouchableOpacity>
					<TouchableOpacity onPress={self.onPress}>    
						<View>
							<Image
							  style={styles.small}
							  source={{uri:imgs[2]}} />
					    </View>
					</TouchableOpacity>
				</View>
			</View>)
	}
});

var styles = StyleSheet.create({
		panel: {
			height: 200,
			flexDirection:'row',
			flexWrap:'wrap',
			justifyContent:'center'
		},
		left:{
			width: 197,
			height:210
		},
		right:{
			flexDirection:'column',
			justifyContent: 'flex-start'
		},
		small:{
			width: 197,
			height:105
		}

});
module.exports = floor;