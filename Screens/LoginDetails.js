import React from 'react';
import {Text,View,Image,} from 'react-native';

 
export default function LoginDetails({navigation}){
        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>

                <Image source={require('../assets/images/details.jpg')}
                style={{width:"100%",height:"40%"}}
                />
            <Text>hi</Text>
            </View>
        )
        
    
        }
