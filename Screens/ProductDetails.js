import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons, } from "@expo/vector-icons";
import { render } from "react-dom";

export default function Home(params) {
    const navigation = params.navigation;
      return (
        <View style ={{backgroundColor: "white", flex: 1}}>
        <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#004D4D",
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
            {/* <FontAwesome name="motorcycle" size={24} color="white" /> */}
            <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}>DETAILS</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
              <View style = {{paddingLeft: 5,}}>
                <Ionicons name="ios-cart-outline" size={20} color="white" />
              </View>
            </View>
        </View>


        <View
          style={{
            backgroundColor: "white",
            flex: 1,
          }}>  
          <Image
          style={{
            width: 445,
            height: 300,
            borderBottomColor: "#e0e0e0", borderBottomWidth: 1,
            //borderColor: "#ff8400",
            //borderWidth: 1,
          }}
          source={require('../assets/images/Laptop3.jpg')}
        
        />

            <View style={{paddingLeft: 15, paddingTop: 10, borderBottomColor: "#e0e0e0", borderBottomWidth: 1, paddingBottom: 10,}}> 
                <Text style = {{color: "#black", fontWeight: "600", fontSize: 20, flexDirection: "row", paddingBottom: 1,}}>Hp Pavelion</Text>
                <Text style = {{color: "#004D4D",fontWeight: "500" }}>GHC 3,000.00</Text>
            </View>


            <View style={{padding: 15,paddingTop: 10, paddingBottom: 10,  borderBottomColor: "#e0e0e0", borderBottomWidth: 1,}}>
                <Text style = {{color: "#black", fontWeight: "600", fontSize: 20, flexDirection: "row", paddingBottom: 10,}}>About</Text>
                <Text style={{flexWrap: "wrap"}}> HP Pavilion laptop is an impressive all-rounder for those who wants to conquer multiple aspect in their everyday life</Text>

                <View style={{flexDirection: "row",}}>
                    <Text style={{fontWeight: "500", color: "#8a8a8a", paddingTop: 5, fontSize: 16}}>Type:</Text>
                    <Text style={{fontWeight: "500", color: "#black", paddingTop: 5, fontSize: 16, paddingLeft: 52,}}>Hp Company</Text>
                </View>

                <View style={{flexDirection: "row",}}>
                    <Text style={{ color: "#8a8a8a", paddingTop: 5, fontSize: 16}}>Dimensions:</Text>
                    <Text style={{ paddingTop: 5, fontSize: 16, paddingLeft: 45,}}>10x10x5 cm</Text>
                </View>
            </View>

            <View style={{marginHorizontal: 15}}>
                <TouchableOpacity
                    onPress={() => {
                    navigation.navigate("Cart");
                    }}
                style={{
                textAlign: "center",
                padding: 10,
                height: 40,
                paddingHorizontal: 115,
                marginTop: 20,
                alignItems: "center",
                borderRadius: 2,
                flexDirection: "row",
                backgroundColor: "#004D4D",
            }}
            >
                <Text style={{ paddingLeft: 10, color: "white",  }}>GO TO CART</Text>
                </TouchableOpacity>
            </View>

        </View>
        </View>
      );
  
    }