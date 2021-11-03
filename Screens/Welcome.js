import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Login from './Login';
import Laptop from '../assets/Laptop.png';


//const Welcome = props => {
    export default function Welcome({ navigation }){
    return (
        <ImageBackground
        style = {styles.img}
        source = {Laptop}
        //source ={{uri: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60=" }
        >
            
        

 
        
            <View style={{flex:1,alignItems:"center", justifyContent:"center"}}>
            
            <Text style={{color:"orange",fontSize:50,fontWeight:"800",paddingRight:20}}>Prilla's <Text style={{color:"#004D4D",fontSize:50,fontWeight:"800",paddingRight:40,}}>Shoppify</Text></Text>
       
           <TouchableOpacity style={{
                backgroundColor:'#e3e3e3',
                padding:10, 
                borderRadius:10,
                paddingHorizontal:60, 
               marginTop:20}}>
                <Text style={{fontSize:17,}}>Improve your skills with best tools from us</Text>
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




    </ImageBackground>
    )
    }

const styles = StyleSheet.create({
   img:{flex:1}

  
  
});



 