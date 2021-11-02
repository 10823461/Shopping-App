import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AntDesign} from '@expo/vector-icons'

export default function Login({navigation}){
    return (
        <View style={{flex:1,backgroundColor:"white",alignItems:"center", justifyContent:"center"}}>
        <Image
        style={{
            width:250,
            height:250,
            borderRadius:20,
            marginBottom:50, 
            transform:[{rotate:"45deg"}]
        }}
         source ={{
             uri:"https://media.gettyimages.com/photos/back-to-school-flat-lay-picture-id1174991144?k=20&m=1174991144&s=612x612&w=0&h=z61iuBsPp89HCj-aCsdOg9nuBxT7SK6bHC_E7pyz9gA="
            }}
            />
     
                
                <Text style={{color:"rgba(0,0,0,0.8)",fontSize:24,}}>Welcome! To </Text>
                <Text style={{color:'black',fontSize:25,fontWeight:"800"}}>Prilla's Tech</Text>
                <TouchableOpacity style={{
                    backgroundColor:'#e3e3e3',
                    padding:10, 
                    borderRadius:10,
                    flexDirection:"row",
                    paddingHorizontal:60, 
                    marginTop:20}}>
                        <AntDesign name="google" size={24} color="orange" />
                    <Text style={{fontSize:17,marginLeft:10}}>Login in with Gmail</Text>
                 </TouchableOpacity>
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
                  <Text style={{fontSize:17, color:"white",marginLeft:10}}>Login in with Apple</Text>

                 </TouchableOpacity>
                 <TouchableOpacity>
                 <Text style={{marginTop:10,fontWeight:"500",color:"grey"}}>Don't have an account?<Text style={{color:"orange",fontWeight:'bold'}}> Sign up</Text></Text>
               </TouchableOpacity>
        </View>
    
    );
    
    
} 

