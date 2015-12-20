var React = require('react-native');

var {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  ListView,
  TouchableOpacity
} = React;

var EmptyPage = require('./EmptyPage.js');
var WebView = require('./webview.js');


var data  = [{
	price: 6.18,
	discount: 4.4,
	img: "http://img10.360buyimg.com/mobilecms/s220x220_jfs/t1165/99/193014481/191229/2f11f072/55094544Nfddb9a27.jpg!q70.jpg"
},{
	price: 6.18,
	discount: 5,
	img: "http://img10.360buyimg.com/mobilecms/s220x220_jfs/t1003/52/539830698/162119/471b1ed3/552f7680N827fe113.jpg!q70.jpg"


},{
	price: 128,
	discount: 6.1,
	img: "http://img10.360buyimg.com/mobilecms/s220x220_jfs/t1225/306/905187200/137830/299905f3/55654230N1b75ebaf.jpg!q70.jpg"

},{
	price: 128,
	discount: 6.1,
	img: "http://img10.360buyimg.com/mobilecms/s220x220_jfs/t1225/306/905187200/137830/299905f3/55654230N1b75ebaf.jpg!q70.jpg"

}];

var seckill = React.createClass({
	getInitialState: function () {
		return {}
		// body...
	},
	onPress: function(url){
		var self = this;
		return function(){
			self.props.navigator.push({
				title: '活动页',
        		component:  WebView,
        		passProps:{
        			url: url
        		}
			});
		}
	},
	render: function(){
		var self = this;
		var list = data.map(function(item, index){
			return (
				<TouchableOpacity key={index} onPress={self.onPress('http://m.jd.com/seckill/seckillList')} >
					<View>
						<Image
						  style={styles.img}
						  source={{uri: item.img}} />
						  <Text style={styles.price}>￥{item.price}</Text>
						  <View style={styles.discount}><Text style={styles.discountText}>{item.discount}折</Text></View>
					</View>				
				</TouchableOpacity>
				)
		})
		return (
			<View style={[this.props.style,{flexDirection:'row', justifyContent:'space-around'}]}>
				{list}
			</View>)
	}
});

var styles = StyleSheet.create({
	img:{
		height:75,
		width:75,
		marginTop:10,
		justifyContent:'center'
	},
	price:{
		fontSize: 12,
		color: '#d8505c',
		width: 75,
		textAlign: 'center'
	},
	discount:{
		backgroundColor:'#d8505c',
		height:15,
		width:75,
		marginTop:8,
		marginBottom:8,	
	},
	discountText:{
		textAlign:'center',
		color: '#fff',
		fontWeight:'bold',
	},
});

module.exports = seckill;