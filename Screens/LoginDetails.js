import React from 'react';
import {Text,View,Image,TextInput,} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

 
export default function LoginDetails({navigation}){
        return(
            <View style={{backgroundColor:"grey",height:"100%"}}>

                <Image source={require('../assets/images/details.jpg')}
                style={{width:"100%",height:"40%"}}
                />
            <Text style={{
                fontSize:28,
                alignSelf:"center",
                fontWeight:'bold'
            }}
             >My Account</Text>
             <View style={{
                 flexDirection:"row",
                 alignItems:"center",
                 marginHorizontal:55,
                 borderWidth:2,
                 marginTop:50,
                 paddingHorizontal:10,
                 borderColor:"#00716",
                 borderRadius:23,
                 paddingVertical:2,


             }}>
                 <AntDesign name="mail" color="#00716F" size={24}/>
                 <TextInput
                 style={{
                     paddingHorizontal:10,

                 }}
                 
                 ></TextInput>

             </View>
             <View style={{
                 flexDirection:"row",
                 alignItems:"center",
                 marginHorizontal:55,
                 borderWidth:2,
                 marginTop:15,
                 paddingHorizontal:10,
                 borderColor:"#00716",
                 borderRadius:23,
                 paddingVertical:2,
                 

             }}>
                 <AntDesign name="mail" color="#00716F" size={24}/>
                 <TextInput
                 style={{
                     paddingHorizontal:10,

                 }}
           />
            </View>
            </View>
        )
        
    
        }
