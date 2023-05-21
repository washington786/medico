import { Dimensions, Platform, StyleSheet, View } from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
import { ActivityIndicator, Caption, Text } from "react-native-paper";
import { colors } from "../../../Globals/Colors";
import { Image } from "react-native-elements";
import { roboto } from "../../../Globals/Fonts";

type page = {
  data: Array<object>;
};

const { width } = Dimensions.get("window");

const isAndroid = Platform.OS==='android';

const PagerWrapper = (props: page) => {
  return (
    <View style={styles.con}>
      <PagerView style={styles.viewer} initialPage={0}>
        {props.data.map((item: any) => {
          const { title, subtitle, uri, id } = item;
          return (
            <View style={styles.page} key={id}>
              <Image
                source={{
                  uri: `${uri}`,
                }}
                containerStyle={styles.img}
                PlaceholderContent={<ActivityIndicator/>}
                style={styles.im}
              />
              <Text style={styles.tit}>{title}</Text>
              <Caption style={styles.sub} numberOfLines={isAndroid?2:1} ellipsizeMode="tail">{subtitle}</Caption>
            </View>
          );
        })}
      </PagerView>
    </View>
  );
};

export default React.memo(PagerWrapper);

const styles = StyleSheet.create({
  con: {
    marginVertical: 8,
    height: 200,
    backgroundColor: colors.primary_1,
    borderRadius: 8,
  },
  viewer: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: width,
    flex: 1,
  },
  im: {
    marginHorizontal: 6,
    borderRadius: 10,
  },
  tit:{
    paddingVertical:2
  },
  sub:{
    textAlign:"center",
    fontFamily: !isAndroid? roboto.thin:roboto.light,
    fontSize: isAndroid?11:10
  }
});
