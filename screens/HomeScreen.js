import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function HomeScreen(){
    const navigation = useNavigation()
    return(
      <View >  
        <Text>Welcome To 9read PDF Reader</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('PDF')}} style={styles.btn} >
            <Text style={styles.btnT} >To View</Text>
        </TouchableOpacity>
      </View>
    )
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    btn:{
        height: 50,
        width:'100%',
        backgroundColor: 'blue',
        textAlign:'center'
    },
    btnT:{
        textAlign:'center',
        padding: 10,
        color:'white',
        fontSize: 20
    }
  })