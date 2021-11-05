import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Laptop from '../assets/Laptop.png';


//const Welcome = props => {
    export default function Home({ navigation }){
    return (
        
            
        

 
        
            <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
            
            <Text style={{color:"orange",fontSize:50,fontWeight:"800",paddingRight:20}}>Prilla's <Text style={{color:"#004D4D",fontSize:50,fontWeight:"800",paddingRight:40,}}>Shoppify</Text></Text>
       
           <TouchableOpacity style={{
                backgroundColor:'#e3e3e3',
                padding:10, 
                borderRadius:10,
                paddingHorizontal:40, 
               marginTop:20}}>
                <Text style={{fontSize:17,alignText:'center'}}>Because you're worth it</Text>
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
           <Text style={{fontSize:17, fontWeight:"800", color:"black"}}>Get Started</Text>

             </TouchableOpacity>
             </TouchableOpacity>

                 </View>




    )
    }

const styles = StyleSheet.create({
   img:{flex:1}

  
  
});



 