import { Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import HeaderBack from "../../../components/main/HeaderBack";
import MainWrapperView from "../../../components/main/MainWrapperView";
import Scroller from "../../../Globals/Scroller";

const isAndroid = Platform.OS === "android";

const Search = () => {
  const [search, setSearch] = useState("");

  const onHandleSearch = (e: string): void => {
    setSearch(e);
  };

  return (
    <Scroller>
      <View style={styles.con}>
        <HeaderBack />
        <SearchWrapper onHandleSearch={onHandleSearch} search={search} />
      </View>
    </Scroller>
  );
};

type s = {
  search: string;
  onHandleSearch(): void;
};

const SearchWrapper = (props: s) => {
  return (
    <MainWrapperView>
      <Searchbar
        placeholder="Search.."
        inputMode="search"
        value={props.search}
        onChangeText={props.onHandleSearch}
        style={styles.input}
        keyboardType="default"
        keyboardAppearance="light"
      />
    </MainWrapperView>
  );
};
export default Search;

const styles = StyleSheet.create({
  con: {
    flexDirection: "column",
  },
  input: {
    backgroundColor: "#f5f3f4",
    borderRadius: isAndroid ? 0 : 70,
  },
});
