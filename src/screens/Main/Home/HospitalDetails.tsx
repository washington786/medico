import { Image, StyleSheet, View } from "react-native";
import React from "react";

import { useRoute } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { Caption, Text } from "react-native-paper";

import Icons from "react-native-vector-icons/Feather";


import MainView from "../../../Globals/MainView";
import HeaderBack from "../../../components/main/settings/HeaderBack";
import Scroller from "../../../Globals/Scroller";
import { rgba } from "../../../Globals/Colors";
import { roboto } from "../../../Globals/Fonts";
import MapDirections from "../../../components/main/MapDirections";



const HospitalDetails = () => {
    const route = useRoute();
  const { hospital,lat,long } = route.params;
  const { rankName, city, province, description, images, operations,coords } = hospital;
  const {latitude,longitude} = coords;
  return (
    <MainView>
      <HeaderBack title="Hospital Information" />
      <Top images={images} />
      <Scroller>
        <Middle
          city={city}
          description={description}
          place={rankName}
          province={province}
        />

        <MapDirections lat={lat} long={long} d_lat={latitude} d_long={longitude}/>
      </Scroller>
    </MainView>
  )
}

type t = {
    images: [];
  };
  const Top = (props: t) => {
    return (
      <View style={{ minHeight: 300, maxHeight: 300 }}>
        <Swiper
          showsButtons={false}
          height={300}
          containerStyle={{
            height: 300,
            maxHeight: 300,
            minHeight: 300,
            zIndex: 100,
          }}
          contentContainerStyle={{
            height: 300,
            maxHeight: 300,
            minHeight: 300,
            zIndex: 100,
          }}
          activeDotColor={"#fff"}
        >
          {props.images.map((url, index) => (
            <View style={{ height: 300, backgroundColor: "red" }} key={index}>
              <Image
                style={{
                  resizeMode: "cover",
                  height: 300,
                  width: "100%",
                  zIndex: 100,
                }}
                source={{ uri: url }}
                resizeMode="cover"
              />
            </View>
          ))}
        </Swiper>
      </View>
    );
  };
  
  type m = {
    city: string;
    province: string;
    place: string;
    description: string;
  };
  const Middle = (props: m) => {
    return (
      <View style={styles.con}>
        <Text>
          {`${props.province}`}, {`${props.city}`}
        </Text>
        <InfoWrapper caption={`${props.place}`} color="red" icon="map-pin" />
        <View>
          <Text
            variant="labelSmall"
            style={styles.desc}
            numberOfLines={2}
            ellipsizeMode="tail"
          >{`${props.description}`}</Text>
        </View>
      </View>
    );
  };
  
  type icoInfo = {
    icon: string;
    caption: string;
    color: string;
  };
  
  type viw = {
    children: any;
  };
  const ViewWrap = (props: viw) => {
    return <View style={styles.viw}>{props.children}</View>;
  };
  
  const InfoWrapper = (props: icoInfo) => {
    return (
      <View style={styles.wrap}>
        <Icons
          name={`${props.icon}`}
          size={20}
          color={`${props.color}`}
          style={styles.icon}
        />
        <Caption>{`${props.caption}`}</Caption>
      </View>
    );
  };

export default React.memo(HospitalDetails);

const styles = StyleSheet.create({
    swiper: {
        flexGrow: 1,
        maxHeight: 200,
        minHeight: 200,
      },
      con: {
        marginHorizontal: 8,
        paddingHorizontal: 5,
        paddingVertical: 8,
      },
      wrap: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
      },
      icon: {
        paddingHorizontal: 8,
      },
      viw: {
        flexDirection: "row",
        alignItems: "center",
      },
      op: {
        paddingHorizontal: 8,
      },
      desc: {
        color: rgba.grey_4,
        paddingHorizontal: 5,
        paddingVertical: 6,
        textAlign: "justify",
        fontFamily: roboto.thin,
      },
})