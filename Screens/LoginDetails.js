import React from 'react';
import {Text,View,Image,} from 'react-native';

 
export default function LoginDetails({navigation}){
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>

                <Image source={require('../assets/images/details.jpg')}
                style={{width:"100%",height:"40%"}}
                />
            <Text style={{
                fontSize:28,
                alignSelf:"center",
                fontWeight:'bold'
            }}
            
            
            >My Account</Text>
            <Text>Life just got better.<Text>The ultimate platform for everything you want to do</Text>
            </Text>
            </View>
        )
        
    
        }
