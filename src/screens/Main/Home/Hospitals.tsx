import { Platform, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

import { Searchbar, Text } from "react-native-paper";
import { colors } from "../../../Globals/Colors";
import { DUMMY_DATA } from "../../../data/Data";
import MapViewDirections from 'react-native-maps-directions';
const destination = {latitude: -23.90035, longitude: 29.45101};
// latitude: -23.90035,
//             longitude: 29.45101,
const GOOGLE_MAPS_APIKEY = 'dfdr';
const isAndroid = Platform.OS === "android";
const Hospitals = () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState({});
  const [error, setError] = useState("");

  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
      var { latitude, longitude } = coords;
      setLatitude(latitude);
      setLongitude(longitude);
    })();
  }, []);

  const handleRankInfo = (hospital: object): void => {
    navigation.navigate("hospitalInfo", {
      hospital: hospital,
      lat: latitude,
      long: longitude,
    });
  };

  return (
    <View style={styles.main}>
      <TopComponent/>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.029,
        }}
      >
          <MapViewDirections
                    origin={{latitude:latitude,
                      longitude: longitude}}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={4}
                    strokeColor='#000'
                  />
        {DUMMY_DATA.map((place) => {
          return (
            <View key={place.id}>
              <Marker
                key={place.id}
                title={place.rankName}
                coordinate={{
                  latitude: place.coords.latitude,
                  longitude: place.coords.longitude,
                }}
              >
                <Callout onPress={handleRankInfo.bind(this, place)}>
                  <View>
                    <Text>{place.rankName}</Text>
                  </View>
                </Callout>
              </Marker>
            </View>
          );
        })}
      </MapView>
    </View>
  );
};
const TopComponent = () => {
  const [search, setSearch] = useState("");

  const onHandleSearch = (e: any): void => {
    setSearch(e);
  };

  return (
    <View style={styles.top}>
      <Searchbar
        placeholder="Search hospital.."
        inputMode="search"
        value={search}
        onChangeText={onHandleSearch}
        style={styles.input}
        keyboardType="default"
        keyboardAppearance="light"
      />
    </View>
  );
};
export default React.memo(Hospitals);

const styles = StyleSheet.create({
  con: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 0,
    margin: 0,
  },
  map: {
    height: "100%",
    width: "100%",
  },
  top: {
    position: "absolute",
    top: 10,
    width: "95%",
    flex: 1,
    zIndex: 100,
    marginHorizontal: 10,
    alignSelf: "center",
  },
  bottom: {
    position: "absolute",
    bottom: 40,
    width: "95%",
    flex: 1,
    zIndex: 100,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-end",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: isAndroid ? 2 : 70,
    zIndex: 100,
    flex: 1,
    elevation: 8,
    borderColor: "#222",
  },
  main: {
    position: "relative",
  },
  fab: {
    backgroundColor: colors.primary_10,
  },
});
