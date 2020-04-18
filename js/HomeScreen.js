import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View,ScrollView,FlatList,Image } from 'react-native';
import HomeDetail from "../js/HomeDetail";
import Booklist from "../list.json"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
    <View style={styles.headerContentStyle}>
      <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
      <Image  source={{uri: "https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/btn_navbar_mobile.png"}} style={styles.search}/>
      </TouchableOpacity>
     
      <Text style={{fontSize:20,color:"#fff",padding:25}}>My Book</Text> 
      <Image  source={{uri: "https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/btn_search.png"}} style={styles.search}/>
    </View>
    <FlatList data={Booklist} 
    renderItem={({item})=> <HomeDetail
    Booklist={item}
    navigation={navigation}
    />}
    keyExtractor={(item,index) => index.toString()}
/>
    <View style={styles.btnbg}>
        <View style={{padding:42,alignItems:"center",}}>
        <Image  source={{uri: "https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/icon_bottomnav_home.png"}} style={styles.home}/>
        <Text style={{fontSize:12,color:"#818181"}}>Home</Text> 
        </View>
        <View style={{padding:42,alignItems:"center",}}>
        <Image  source={{uri: "https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/icon_bottomnav_mybook_selected.png"}} style={styles.home}/>
        <Text style={{fontSize:12,color:"#818181"}}>My Book</Text> 
        </View>
        <View style={{padding:42,alignItems:"center",}}>
        <Image  source={{uri: "https://raw.githubusercontent.com/ntue110719041/hw4_book/master/img/icon_drawer_favorites.png"}} style={styles.home}/>
        <Text style={{fontSize:12,color:"#818181"}}>Favorites</Text>
        </View>    
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage:{
    width:300,
    height:40,
    marginTop:8,
    marginLeft:10,
  },
  headerContentStyle:{
    flexDirection:"row",
    width:400,
    height:55,
    backgroundColor:"#00b49f",
    marginTop:25,
    marginLeft:-20,
    elevation:5,
    alignItems:"center",
    justifyContent:"space-around",
  },
  search:{
    width: 40,
    height: 40,
  },
  home:{
    width: 24,
    height: 24,
  },
  btnbg:{
    flexDirection:"row",
    backgroundColor:"#fff",
    width:400,
    height:56,
    elevation:10,
    alignItems:"center",
  },
});
export default HomeScreen;