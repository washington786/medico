import { StyleSheet, View } from "react-native";
import React from "react";

import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";

type map = {
  lat: number;
  long: number;
  d_lat: number;
  d_long: number;
};
const MapDirections = (props: map) => {
  let longitude: number = props.d_long;
  let latitude: number = props.d_lat;

  const coords = [{ latitude, longitude }];

  return (
    <View style={styles.con}>
      <MapView
        style={styles.map}
        region={{
          latitude: props.lat,
          longitude: props.long,
          latitudeDelta: 0.09,
          longitudeDelta: 0.029,
        }}
      >
        <Marker
          coordinate={{
            latitude: props.lat,
            longitude: props.long,
          }}
        />
       
        <Polyline coordinates={coords} strokeColor="#f00" strokeWidth={2} />
      </MapView>
    </View>
  );
};

export default MapDirections;

const styles = StyleSheet.create({
  con: {
    maxHeight: 250,
    minHeight: 250,
    height: "100%",
    backgroundColor: "#eee",
    marginHorizontal: 10,
    marginVertical: 8,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
