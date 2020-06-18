import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { color } from "../constants";
const { width, height } = Dimensions.get("window");
const HorizontalCard = () => {
  const star = [1, 2, 3, 4, 5];
  return (
    <View
      style={{
        marginVertical: 15,
        height: height / 4 - 50,
        backgroundColor: "white",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 10,

        shadowRadius: 5,
      }}
    >
      <View style={{ flex: 1, paddingLeft: 20 }}>
        <Image
          style={{ height: "70%", width: "70%" }}
          source={require("../../assets/food-1.png")}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20 }}>Meaty Pizza</Text>
        <View style={{ flexDirection: "row" }}>
          {star.map((item, index) => {
            return (
              <Entypo
                key={index}
                name="star-outlined"
                size={12}
                color="black"
              />
            );
          })}
        </View>
        <Text>
          {" "}
          <Text style={{ fontSize: 10, color: color.primary }}>$</Text>{" "}
          <Text style={{ fontSize: 20 }}>12</Text>
        </Text>
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 50,
          height: 50,
          borderBottomRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: color.primary,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <Entypo name="plus" size={24} color={color.tileBackground} />
        </View>
      </View>
    </View>
  );
};

export default HorizontalCard;