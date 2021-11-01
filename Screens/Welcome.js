import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Login from './Login';

export default function Welcome({ navigation }){
    return (
        <View style={{flex:1,backgroundColor:"black",alignItems:"center", justifyContent:"center"}}>
            <Image
            style={{
                width:300,
                height:200,
                borderRadius:10,
                marginBottom:20, 
            }}
             source ={{
                 uri:"https://media.gettyimages.com/photos/office-workplace-computer-with-white-blank-empty-screen-picture-id1184812329?k=20&m=1184812329&s=612x612&w=0&h=kQEo7bgzh10cJWRtphJiekQUycsOk7cSH9pd3ocvRsA="
             }}
                 />
                <Text style={{color:"white",fontSize:24,}}>Your Skills </Text>
                <Text style={{color:"white",fontSize:25,fontWeight:"800"}}>Our Priority</Text>
                <TouchableOpacity style={{
                    backgroundColor:'#e3e3e3',
                    padding:10, 
                    borderRadius:10,
                    paddingHorizontal:60, 
                    marginTop:20}}>
                    <Text style={{fontSize:17}}>Improve your skills with best tools from us</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{
                 backgroundColor:"white",
                    padding:10, 
                    borderRadius:10,
                    paddingHorizontal:60, 
                    marginTop:20}}>

                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate("Login")
                    }}
                      >
                    <Text style={{fontSize:17, fontWeight:"500",  color:"black"}}>Get Started</Text>

                 </TouchableOpacity>
                 </TouchableOpacity>

                     </View>
                 );
                }

