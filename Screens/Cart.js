
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons, } from "@expo/vector-icons";
import { render } from "react-dom";


export default function Cart(params){
    const navigation = params.navigation;
    return(
        <View style ={{backgroundColor: "white", flex: 1,}}>
            <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#ff8400",
              alignItems: "center",
              paddingTop: 15,
              paddingBottom: 10,
              paddingHorizontal: 15,
            }}
          >
               <TouchableOpacity
              
              onPress={()=>{
                  navigation.navigate("Home")
             }}
              >
            <Ionicons name="arrow-back-outline" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}>MY CART</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            </View>
            </View>


        <View style={{ paddingVertical: 5, paddingHorizontal: 15}}>
        <TouchableOpacity
        
          style={{
            //padding: 10,
            height: 130,
            width: 340,
            //paddingRight: 25,
            //marginTop: 2,
            //marginBottom: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#ff8400",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 100,
            height: 100,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#ff8400",
            borderWidth: 1,
          }}
          source={require('../assets/images/Laptop3.jpg')}
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Acer Aspire</Text>
          <Text style = {{color: "#ff8400"}}>GHC 3,000.00</Text>

          <View style={{flexDirection: "row", fontSize: 16, paddingTop: 10}}>
          <Text style={{fontWeight: "bold"}}>Number:</Text>
          <Text style={{paddingHorizontal: 15}}>3</Text>
          </View>
        </View>

        </TouchableOpacity>
        </View>

        <View style={{ paddingVertical: 5, paddingHorizontal: 15}}>
        <TouchableOpacity
          
          style={{
            //padding: 10,
            height: 130,
            width: 340,
            //paddingRight: 25,
            //marginTop: 2,
            //marginBottom: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#ff8400",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 100,
            height: 100,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#ff8400",
            borderWidth: 1,
          }}
          source={require('../assets/images/Laptop2.png')}
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Hp Pavelion</Text>
          <Text style = {{color: "#ff8400"}}>GHC 2,500.00</Text>

          <View style={{flexDirection: "row", fontSize: 16, paddingTop: 10}}>
          <Text style={{fontWeight: "bold"}}>Number:</Text>
          <Text style={{paddingHorizontal: 15}}>1</Text>
          </View>
        </View>

        </TouchableOpacity>

        <TouchableOpacity

          style={{
            textAlign: "center",
            padding: 10,
            height: 40,
            paddingHorizontal: 115,
            marginTop: 20,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            backgroundColor: "#ff8400",
          }}
        >
          <Text style={{ paddingLeft: 10, color: "white", fontWeight: "bold" }}>MAKE PAYMENT</Text>
        </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 5, paddingHorizontal: 15}}>
        <TouchableOpacity
        
          style={{
            //padding: 10,
            height: 130,
            width: 340,
            //paddingRight: 25,
            //marginTop: 2,
            //marginBottom: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#ff8400",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 100,
            height: 100,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#ff8400",
            borderWidth: 1,
          }}
          source={require('../assets/images/logo1.png')}
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Acer Aspire</Text>
          <Text style = {{color: "#ff8400"}}>GHC 3,000.00</Text>

          <View style={{flexDirection: "row", fontSize: 16, paddingTop: 10}}>
          <Text style={{fontWeight: "bold"}}>Number:</Text>
          <Text style={{paddingHorizontal: 15}}>3</Text>
          </View>
        </View>

        </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 5, paddingHorizontal: 15}}>
        <TouchableOpacity
        
          style={{
            //padding: 10,
            height: 130,
            width: 340,
            //paddingRight: 25,
            //marginTop: 2,
            //marginBottom: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#ff8400",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 100,
            height: 100,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#ff8400",
            borderWidth: 1,
          }}
          source={require('../assets/images/logo2.png')}
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Acer Aspire</Text>
          <Text style = {{color: "#ff8400"}}>GHC 3,000.00</Text>

          <View style={{flexDirection: "row", fontSize: 16, paddingTop: 10}}>
          <Text style={{fontWeight: "bold"}}>Number:</Text>
          <Text style={{paddingHorizontal: 15}}>3</Text>
          </View>
        </View>

        </TouchableOpacity>
        </View>

        </View>
    )
}