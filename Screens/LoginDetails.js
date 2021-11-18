import React,{useState} from 'react';
import { Text,Icon, View, Image, TextInput, } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



function TextInputComponent(props) {

    return (
        <View style={{ marginHorizontal: 5, marginVertical: 5 }}>
            <Text style={{ marginBottom: 10 }}>{props?.label}</Text>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1.5,
                paddingHorizontal: 14,
                borderColor: "#00716",
                borderRadius: 15,
                paddingVertical: 5,

            }}>
                {props?.icon && props?.icon}
                <TextInput
                    style={{
                        paddingHorizontal: 10,

                    }}

                ></TextInput>
 {props?.icon2 && props?.icon2}
            </View>
        </View>

    )
}

export default function LoginDetails({ navigation }) {
    const [hidePass, setHidePass] = useState(true);
    return (
        <View style={{ backgroundColor: "grey", height: "100%" }}>

            <Image source={require('../assets/images/details.jpg')}
                style={{ width: "100%", height: "40%" }}
            />
            <Text style={{
                fontSize: 28,
                alignSelf: "center",
                fontWeight: 'bold',
              
            }}
            >My Account</Text>
            <View style={{paddingHorizontal: 10, fontWeight:'bold'}}>
                <TextInputComponent label="Email Address" icon={<AntDesign name="mail" color="#00716F" size={24} />} />
                <TextInputComponent label="Password" icon={<AntDesign name="lock" color="#00716F" size={24} />} /> 
            </View>
            <Text style={{
                    marginTop:10,
                    marginLeft:20,
                    fontWeight:'bold',
                    color:"#00716F",
                    marginBottom:30,
                }}>Forgot Password?</Text>

              
               <View style={{justifyContent:'center', alignItems:'center', width:'100%'}}>
                <TouchableOpacity 
                style={{
                    
                   height:30,
                   width:200,
                    borderWidth: 1,
                    backgroundColor: "#2a5e6e",
                    borderRadius: 5,
                    textAlign:'center',
                   }}
                   onPress={()=>{
                    navigation.navigate("Home")}}
                    >
                       
            <Text style={{ justifyContent:'center',}}>
                 
                        Sign in
                    </Text>
                </TouchableOpacity>
                </View>
            
           
    
   
        </View>
    )


}
