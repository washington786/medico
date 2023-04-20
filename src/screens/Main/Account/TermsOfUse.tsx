import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScrollWrapper from "../../../Globals/ScrollWrapper";
import MainWrapperView from "../../../components/main/MainWrapperView";
import HeaderBack from "../../../components/main/settings/HeaderBack";
import { Paragraph, Title } from "react-native-paper";
import { terms } from "../../../data/terms";
import Scroller from "../../../Globals/Scroller";

const TermsOfUse = () => {
  let title:string = "Terms Of Use";
  return (
    <ScrollWrapper>
      <MainWrapperView>
        <HeaderBack title={title}/>
        <Scroller>
          <MainTitle title="Terms And Conditions" />
          {terms.map((item, index) => {
            const { title, message } = item;
            return (
              <Content
                title={title}
                paragraph={message}
                key_use={index}
                key={index}
              />
            );
          })}
        </Scroller>
      </MainWrapperView>
    </ScrollWrapper>
  );
};

export default TermsOfUse;

interface w {
  children?: any;
  title?: string;
}
export const ContainerWraper = (props: w) => {
  return <View style={styles.con}>{props.children}</View>;
};
export const MainTitle = (props: w) => {
  return <Text style={styles.title}>{props.title}</Text>;
};
interface c {
  title: string;
  paragraph: string;
  key_use: number;
}
export const Content = (props: c) => {
  return (
    <View style={styles.content} key={props.key_use}>
      <Title>{props.title}</Title>
      <Paragraph style={styles.par}>{props.paragraph}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  content: {
    paddingVertical: 13,
  },
  par: {
    fontSize: 14,
    paddingVertical: 6,
  },
});
