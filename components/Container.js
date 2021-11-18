import React from 'react';
import {View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default  function Container({children,navigation}){
    return (
        <View  style={{ width: '90%', marginHorizontal: 'auto'}}>
            {children}
            {/* <TouchableOpacity style={{width:20}}>
            </TouchableOpacity> */}
        </View>
    )
}