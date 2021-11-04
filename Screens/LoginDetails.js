import React from 'react';
import { Text, View, Image, TextInput, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


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

            </View>
        </View>

    )
}

export default function LoginDetails({ navigation }) {
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
            <View style={{paddingHorizontal: 10}}>
                <TextInputComponent label="Email" icon={<AntDesign name="mail" color="#00716F" size={24} />} />
                <TextInputComponent label="Password" icon={<AntDesign name="lock" color="#00716F" size={24} />} />
            </View>


        </View>
    )


}
