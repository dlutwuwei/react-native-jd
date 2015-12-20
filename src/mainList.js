/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  NavigatorIOS
} = React;

var jdlogo  = require('image!jd');
var jdCatogary = require('image!catogary');

var Head = require('./head.js');
var Block = require('./block.js');
var Seckill = require('./seckill.js');
var Floor = require('./panel-floor.js');
var EmptyPage = require('./EmptyPage.js');

var PanResponderExample = require('../example/guesture.js');



var mainList = React.createClass({
  getInitialState: function () {
      return {
          searchText: "jd.com"  
      };
  },
  onPress: function(){
      this.props.navigator.push({
        title: 'emptyPage',
        component: EmptyPage,
      });
  },
  render: function() {
    // console.log("mainlist",this.props.navigator)
    return (
      <View style={styles.listContainer}>      
        <View style={styles.searchRow}>
          <Image source={jdlogo} style={styles.logo}/>
          <TextInput
            autoCapitalize="none"
            clearButtonMode="always"
            placeholder="Search..."
            style={styles.searchTextInput}
            value={this.state.searchText}
          />
          <Image source={jdCatogary} style={styles.catogary}/>
        </View>

        <ScrollView 
          contentInset={{top: -60}}>
          <Head style={styles.block} navigator={this.props.navigator}>
          </Head>
          <Block style={styles.block} title={"掌上秒杀"}>
            <Seckill navigator={this.props.navigator}></Seckill>
          </Block>
          <Block style={styles.block} title={"超值购"}>
            <Floor navigator={this.props.navigator}></Floor>
          </Block>

        </ScrollView>
      </View>

    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  listContainer: {
    backgroundColor: '#F5F5F5'
  },
  logo:{
    height:25,
    width:20,
    marginTop:7,
    marginRight:4
  },
  catogary:{
    height:30,
    width:20,
    marginLeft:10
  },
  searchRow: {
    backgroundColor: '#efefef',
    paddingTop: 75,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection:"row"
  },
  searchTextInput: {
    backgroundColor: 'white',
    borderColor: '#cccccc',
    borderRadius: 3,
    borderWidth: 1,
    height: 30,
    flex:1,
    justifyContent:"space-between",
    paddingLeft: 8,

  },
  sroll:{
    marginTop: 0,
    paddingTop:0
  },
  block:{
      margin:10,
      backgroundColor: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = mainList;