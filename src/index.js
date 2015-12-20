/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule UIExplorerApp
 * @flow
 */
'use strict';

var React = require('react-native');
var MainList = require('./mainList');
var LoadingView = require('./loading');
var PanResponderExample = require('../example/guesture.js');
var WebView = require('./webview.js');

var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  TabBarItemIOS
} = React;


var jdApp = React.createClass({

  getInitialState: function() {
    return {
      openExternalExample: (null: ?React.Component),
      selectedTab: 'blueTab',
      presses: 0,
    };
  },

  render: function() {
    
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    name="blueTab"
                    accessibilityLabel="Blue Tab"
                    title='首页'
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}>

                    <NavigatorIOS
                      style={styles.container}
                      ref="nav"
                      initialRoute={{
                        title: '京东触屏版',
                        component: MainList
                      }}
                      itemWrapperStyle={styles.itemWrapper}
                      tintColor='#008888'
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    accessibilityLabel="Red Tab"
                    name="redTab"
                    title='m版'
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                    }}>
                    <WebView url='http://m.jd.com'/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    name="greenTab"
                    title='测试'
                    accessibilityLabel="Green Tab"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                    }}>
                    <PanResponderExample />
                </TabBarIOS.Item>
          </TabBarIOS>
      
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: '#fff',
  },
});

module.exports = jdApp;
