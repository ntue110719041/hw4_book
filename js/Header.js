import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';

const Header = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>專輯</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default Header;