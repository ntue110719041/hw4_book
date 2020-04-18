import React from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight,TouchableOpacity, Button } from 'react-native';
import * as Progress from 'react-native-progress';
import { round } from 'react-native-reanimated';
import Booklist from "../list.json"

const List = ({Booklist}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <View style={styles.imgbg}>
        <Image source={{uri:Booklist.img}} style={styles.img}/>
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{Booklist.title}</Text>
          <Text style={styles.author}>{Booklist.author}</Text>
          <Text style={styles.content}>{Booklist.content}</Text>
          <Progress.Bar progress={Booklist.width} width={194} height={3} color={"#70b4a1"} unfilledColor={"#c3c3c3"} borderColor={"transparent"} />
          <TouchableHighlight onPress={()=>{}} underlayColor={"red"} style={{width:Booklist.btnwidth,justifyContent:"center",padding:2,borderRadius:3,marginBottom:9}}>
          <Text style={{color:Booklist.color,fontWeight:Booklist.weight}}>{Booklist.status}</Text>
          </TouchableHighlight>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    height:170,
    padding:15,
    backgroundColor:"#f8f8f8",
    borderBottomColor:"#d1d1d1",
    borderBottomWidth:1,
  },
  imgbg:{
    width:99,
    height:146,
    elevation:3,
    backgroundColor:"#f8f8f8",
    borderColor:"#d1d1d1",
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:93,
    height:140,
  },
  text:{
    width:194,
    marginLeft:27,
  },
  title:{
    color:"#2e2e2e",
    fontSize:18,
    fontFamily:"Roboto",
    fontWeight:"bold",
    marginBottom:11,
  },
  author:{
    color:"#717171",
    fontSize:14,
    fontFamily:"Roboto",
    marginBottom:11,
  },
  content:{
    color:"#b1b1b1",
    fontSize:12,
    fontFamily:"Roboto",
    marginBottom:10,
  },
});

export default List;