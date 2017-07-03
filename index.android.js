/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';

//引入tabbar支持包
// import TabNavigator from 'react-native-tab-navigator';
// import HomePageApp from './src/containers/HomePage';
import { TabNavigator } from 'react-navigation';
// const TabNavigatorItem =TabNavigator.Item;


{/*
const TAB_NORMAL_1=require('./src/images/tabbar_1.png');
const TAB_NORMAL_2=require('./src/images/tabbar_2.png');
const TAB_NORMAL_3=require('./src/images/tabbar_3.png');
const TAB_NORMAL_4=require('./src/images/tabbar_4.png');

const TAB_PRESS_1=require('./src/images/tabbar_1_press.png');
const TAB_PRESS_2=require('./src/images/tabbar_2_press.png');
const TAB_PRESS_3=require('./src/images/tabbar_3_press.png');
const TAB_PRESS_4=require('./src/images/tabbar_4_press.png');

class jwb_app extends Component {

  constructor(){
    super();
    this.state={
      selectedTab:'Mine',
    }
  }


  onPress(tabName){
    if(tabName){
      this.setState(
        {
          selectedTab:tabName,
        }
      );
    }
  }

   renderTabView(title,tabName,tabContent,isBadge){
     let tabNomal;
     let tabPress;
     switch (tabName) {
       case 'Home':
         tabNomal=TAB_NORMAL_1;
         tabPress=TAB_PRESS_1;
         break;
       case 'Video':
         tabNomal=TAB_NORMAL_2;
         tabPress=TAB_PRESS_2;
         break;
       case 'Follow':
         tabNomal=TAB_NORMAL_3;
         tabPress=TAB_PRESS_3;
         break;
       case 'Mine':
         tabNomal=TAB_NORMAL_4;
         tabPress=TAB_PRESS_4;
         break;
         default:

     }
     return(
       <TabNavigatorItem
        title={title}
        renderIcon={()=><Image style={styles.tabIcon} source={tabNomal}/>}
        renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
        selected={this.state.selectedTab===tabName}
        selectedTitleStyle={{color:'#f85959'}}
        onPress={()=>this.onPress(tabName)}
        renderBadge={()=>isBadge?<View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View>:null}
       >
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{tabContent}</Text></View>
       </TabNavigatorItem>
     );
   }

  tabBarView(){
    return (
      <TabNavigator
       tabBarStyle={styles.tab}
      >
      {this.renderTabView('相遇','Home','头条板块',false)}
      {this.renderTabView('同城','Video','视频板块',false)}
      {this.renderTabView('征婚墙','Follow','关注板块',false)}
      {this.renderTabView('消息','Message','消息板块',false)}
      {this.renderTabView('我的','Mine','我的板块',true)}
      </TabNavigator>
    );
  }


  render() {
    let tabBarView=this.tabBarView();
    return (
      <View style={styles.container}>
        {this.tabBarView()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
  tab:{
    height: 52,
    alignItems:'center',
    backgroundColor:'#f4f5f6',
  },
  tabIcon:{
    width:25,
    height:25,
  },
  badgeView:{
    width:22,
    height:14 ,
    backgroundColor:'#f85959',
    borderWidth:1,
    marginLeft:10,
    marginTop:3,
    borderColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  },
  badgeText:{
    color:'#fff',
    fontSize:8,
  }
});

*/}





class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./src/images/tabbar_1.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./src/images/tabbar_1.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 56,
  },
});

const jwb_app = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {

  tabBarPosition:'bottom',
  tabBarOptions: {
    activeTintColor: 'red',
    showIcon: true,
    inactiveTintColor: '#777',
    style: {
      backgroundColor: '#fff',
    },
  },
});


AppRegistry.registerComponent('jwb_app', () => jwb_app);
