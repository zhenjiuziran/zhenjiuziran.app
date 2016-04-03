/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './js/reducers/index';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

import NavigationBar from 'react-native-navbar';
var Icon = require('react-native-vector-icons/Ionicons');
import ill from './components/ill';

var LOREM_IPSUM = 'Lorem ipsum dolor sit amet,eprimique, einvidunt reprehendunt ne qui.';



var ZTabBar = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBarExample',

  getInitialState: function() {
    return {
      selectedTab: 'home',
      notifCount: 0,
      presses: 0,
    };
  },

  _renderContent: function(color: string, pageText: string, num?: number) {
    const rightButtonConfig = {
      title: '',
      handler: () => alert('hello!'),
    };

    const titleConfig = {
      title: '自然法则',
    };

    return (
      <View style={{flex:1}}>
        <NavigatorIOS
          style={{flex:1}}
          initialRoute={{
            component:ill,
            title:"Home"
          }}
        />
      </View>
    );
    // return (
      // <View style={[styles.tabContent, {backgroundColor: color}]}>
      //   <Text style={styles.tabText}>{pageText}</Text>
      //   <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      // </View>
    // );
  },

  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue"
        style={styles.tabs}
        >
        <Icon.TabBarItem
          title="主页"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'home', this.state.notifCount)}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="看病"
          iconName="man"
          selectedIconName="man"
          selected={this.state.selectedTab === 'man'}
          onPress={() => {
            this.setState({
              selectedTab: 'man',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'man', this.state.notifCount)}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="专家"
          iconName="ios-people-outline"
          selectedIconName="ios-people"
          selected={this.state.selectedTab === 'people'}
          onPress={() => {
            this.setState({
              selectedTab: 'people',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'people', this.state.notifCount)}
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  },

});

class Nav extends View {
  componentWillMount () {
    // console.log(this);
  }
  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        // barTintColor="#fcf0f0"
        // itemWrapperStyle={styles.container}
        // navigationBarHidden={false}
        // shadowHidden={true}
        // tintColor="#000000"
        // titleTextColor="#008080"
        // translucent={false}
        // initialRoute={{
        //   component:Layout1,
        //   title:'View Title',
        //   passProps:{myProp:'foo'}
        // }}
      />
    )
  }
}
class Layout1 extends View {
  componentWillMount() {
    console.log("Layout",this.props);
  }
  componentDidMount() {
    console.log("Layout mounted");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <TabBarExample />
      </View>
    );
  }
}


class zhenjiu extends Component {
  render() {
    return (
      <Provider store={store}>
        <ZTabBar />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
    // flexDirection:'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  container:{
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabs:{
    flex:1,
    flexDirection:'row'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabText: {
    color: 'white',
    margin: 0,
  },
  row:{

  },
  text:{
    alignItems:'flex-start'
  },
  separator:{

  }
});

AppRegistry.registerComponent('zhenjiu', () => zhenjiu);
