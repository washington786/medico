import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { colors, rgba } from "../../../Globals/Colors";
import { useNavigation } from "@react-navigation/native";

const SearchWrapper = () => {
  const navigation = useNavigation();
  const handleSearch=()=>{
    navigation.navigate('search');
  }
  return (
    <TouchableOpacity
      style={styles.con}
      onPress={handleSearch}
      activeOpacity={1}
    >
      <TextInput
        disabled
        placeholder="Search here.."
        right={
          <TextInput.Icon
            icon={"magnify"}
            iconColor={"white"}
            style={styles.bg}
            onPress={handleSearch}
          />
        }
        mode="outlined"
        outlineStyle={styles.outline}
      />
    </TouchableOpacity>
  );
};

export default React.memo(SearchWrapper);

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.primary_6,
  },
  con: {
    marginVertical: 8,
    zIndex: 10,
  },
  outline: {
    borderRadius: 50,
    borderColor: rgba.grey_1,
    borderWidth: 0.6,
  },
});
