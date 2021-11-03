import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AntDesign} from '@expo/vector-icons'

export default function Login({navigation}){
    return (
        <View style={{flex:1,backgroundColor:'#E6FFFF',alignItems:"center", justifyContent:"center"}}>
        <Image
        style={{
            width:250,
            height:250,
            borderRadius:20,
            marginBottom:10, 
        }}
         source ={{
             uri:"https://media.gettyimages.com/photos/beautiful-woman-standing-in-front-of-blue-background-with-smart-phone-picture-id1268184706?k=20&m=1268184706&s=612x612&w=0&h=flglc0pirXRGe-YF-qwdAbylTePorGHX2rP0m9RgR08="
            }}
            />
     
               
                <Text style={{
                    backgroundColor:'#e3e3e3',
                    padding:10, 
                    borderRadius:10,
                    flexDirection:"row",
                    paddingHorizontal:60, 
                    marginTop:20}}>
                       
                    <Text style={{fontSize:17,marginLeft:10}}>Get Access into your Account </Text>
                 </Text>
                 <TouchableOpacity 
                 style={{
                 backgroundColor:"black",
                 flexDirection:"row",
                    padding:10, 
                    borderRadius:10,
                    paddingHorizontal:60, 
                    marginTop:20
                    }}
                   >
                        
                         <AntDesign name="apple1" size={24} color="white" />
                  <Text style={{fontSize:17, color:"white",marginLeft:10, paddingRight:10,}}>Login in</Text>
                  <AntDesign name="google" size={24} color="white" />

                 </TouchableOpacity>
                 <TouchableOpacity>
                 <Text style={{marginTop:10,fontWeight:"500",color:"grey"}}>Don't have an account?<Text style={{color:"orange",fontWeight:'bold'}}> Sign up</Text></Text>
               </TouchableOpacity>
        </View>
    
    );
    
    
} 

