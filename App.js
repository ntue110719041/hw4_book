import * as React from 'react';
import { Button, View,StyleSheet,Image,Text,SafeAreaView } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer,DrawerActions, useIsFocused } from '@react-navigation/native';

import HomeDetail from "./js/HomeDetail";
import Booklist from "./list.json"
import HomeScreen from "./js/HomeScreen"

const Drawer = createDrawerNavigator();
const CustomDrawerContent = ({ ...rest }) => {
  return (
    <DrawerContentScrollView {...rest}>
      <View style={styles.drawertop}>
        <Image  source={{uri: "https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/img_user_photo.png"}} style={styles.user}/>
        <Text style={{fontSize:14,color:"#fff",marginLeft:5}}>GamexHCl</Text>
         <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={{fontSize:14,color:"#fff",marginLeft:5}}>gdlab2017@gmail.com</Text>
          <Image  source={{uri: "https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/btn_down_arrow.png"}} style={styles.down}/>
        </View>
      </View>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerStyle={{ width: 304,}}drawerContentOptions={{activeBackgroundColor:"#00b49f",activeTintColor:"white",itemStyle: { marginTop:0,marginLeft: 0, marginRight: 0,marginBottom:0,borderRadius:0,height:54,justifyContent:"center"},
          }} drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} 
        options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={{uri:"https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/icon_bottomnav_home.png"}}
              style={{width:24, height: 24, tintColor: tintColor,marginLeft:12,}}
            />
          ), 
        }}/>
        <Drawer.Screen name="My Book" component={HomeScreen} options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={{uri:"https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/icon_drawer_mybook_pressed.png"}}
              style={{width:24, height: 24, tintColor: tintColor,marginLeft:12,}}
            />
          ), 
        }}/>
        <Drawer.Screen name="Favorites" component={HomeScreen} options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={{uri:"https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/icon_drawer_favorites.png"}}
              style={{width:24, height: 24, tintColor: tintColor,marginLeft:12,}}
            />
          ), 
        }}/>
        <Drawer.Screen name="Settings" component={HomeScreen} options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={{uri:"https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/icon_drawer_setting.png"}}
              style={{width:24, height: 24, tintColor: tintColor,marginLeft:12,}}
            />
          ), 
        }}/>
        <Drawer.Screen name="About us" component={HomeScreen} options={{
          drawerIcon: ({ tintColor }) => (
            <Image
              source={{uri:"https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/icon_drawer_aboutus.png"}}
              style={{width:24, height: 24, tintColor: tintColor,marginLeft:12,}}
            />
          ), 
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawertop:{
    height:168,
    backgroundColor:"#00b49f",
    marginTop:-3,
    paddingTop:37,
    padding:13
  },
  user:{
    width: 70,
    height: 70,
    marginBottom:10,
  },
  down:{
    width: 24,
    height: 24,
    marginTop:-12,
    marginRight:16
  },
  favorites:{
    width: 24,
    height: 24,
    margin:0,
  },
});
