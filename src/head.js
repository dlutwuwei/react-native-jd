'use strict';

var React = require('react-native');

var {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  ListView,
  TouchableHighlight,
  AlertIOS,
  PushNotificationIOS,
  TouchableOpacity,
  PanResponder
} = React;


var EmptyPage = require('./EmptyPage.js');
var WebView = require('./webview.js');


var WithIcon = React.createClass({
	
	render: function(){
		// console.log(this.props.onpress)
		return (
		<TouchableOpacity onPress={this.props.onpress}>    
			<View style={styles.iconWrap}>
				<Image
				  style={styles.icon}
				  source={this.props.src} />
				<Text style={styles.iconText}>{this.props.children}</Text>
		    </View>
		</TouchableOpacity>
		)
	}
});
var icons = [
	require('image!1'),
	require('image!2'),
	require('image!3'),
	require('image!4'),
	require('image!5'),
	require('image!6'),
	require('image!7'),
	require('image!8')
];



var texts=[
	"分类",
	"物流查询",
	"购物车",
	"我的京东",
	"充值",
	"机票",
	"生活购物",
	"我的关注"
]

var focuses = [
	'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2368/170/1691753470/83355/b1cb1e23/56756f82N4b8adbab.jpg',
	'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2173/162/1736790004/116848/c30f0877/56756ec6N3c51d1d6.jpg',
	'http://m.360buyimg.com/mobilecms/s720x350_jfs/t1996/58/1772295704/112897/d5ad65c3/56756e47N66749fb9.jpg',
	'http://m.360buyimg.com/mobilecms/s720x350_jfs/t2545/123/951789583/60278/8da3884/56756db1N06195b2a.jpg'
];

var targets = [
	'http://sale.jd.com/m/act/0T4iC2nwad.html?resourceType=listActivity&resourceValue=5_0_3_62705&resourceType=index_activity&resourceValue=&client=m&sid=ae3d1fa539574237a56dd12b122227e3',
	'http://sale.jd.com/m/act/WaqEpkRzriD3NtYm.html?resourceType=listActivity&resourceValue=5_0_1_62703&resourceType=index_activity&resourceValue=&client=m&sid=ae3d1fa539574237a56dd12b122227e3',
	'http://sale.jd.com/m/act/xXbFfWKNiRove.html?resourceType=listActivity&resourceValue=5_0_4_62706&resourceType=index_activity&resourceValue=&client=m&sid=ae3d1fa539574237a56dd12b122227e3',
	'http://sale.jd.com/m/act/w5YTtJiHqnK.html?resourceType=listActivity&resourceValue=5_0_5_62707&resourceType=index_activity&resourceValue=&client=m&sid=ae3d1fa539574237a56dd12b122227e3'
]


var Head = React.createClass({
	getInitialState: function () {
		return {
			index: 0
		}
	},
	_panResponder:{},
	componentDidMount: function() {
	    this.timer = setInterval(function(){
	    	this.onTouchMove()
	    }.bind(this),3000);
  	},
	onPress: function(){
		this.props.navigator.push({
			title: '空白页',
    		component:  EmptyPage
		});
		
	},
	go: function(url){
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
	onTouchMove:function(){
		var s = (++this.state.index)%focuses.length;
		this.setState({
			index: s
		})
	},
	render: function(){
		var self = this;
		var iconlist = icons.map(function(item, index){
			return (<WithIcon key={index} src={item} onpress={self.onPress}>{texts[index]}</WithIcon>)
		})
		return (
			<View style={this.props.style}>
				<TouchableOpacity onPress={self.go(targets[this.state.index])} >
				<View>
					<Image
					  style={styles.headimage}
					  source={{uri: focuses[this.state.index]}} />
				</View>
				</TouchableOpacity>
				<View style={styles.iconlist} >       
					{iconlist}
				</View>
			</View>	
			
		);
	}
});
var styles = StyleSheet.create({
	headimage:{
		height:190,
		justifyContent:"space-between",
	},
	iconlist:{
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems:'center',
		marginTop: 5,
		marginBottom:10
	},
	iconWrap:{
		width: 88,
		alignItems: 'center'
	},
	iconText:{
		fontSize: 12,
		lineHeight:14
	},
	icon:{
		height:22,
		width:25
	}
})
module.exports = Head;
