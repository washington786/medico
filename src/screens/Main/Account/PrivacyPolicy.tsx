import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScrollWrapper from "../../../Globals/ScrollWrapper";
import MainWrapperView from "../../../components/main/MainWrapperView";
import HeaderBack from "../../../components/main/settings/HeaderBack";
import Scroller from "../../../Globals/Scroller";
import { Content, MainTitle } from "./TermsOfUse";
import { privacy } from "../../../data/privacy";

const PrivacyPolicy = () => {
  let title: string = "Privacy And Policies";
  return (
    <ScrollWrapper>
      <MainWrapperView>
        <HeaderBack title={title} />
        <Scroller>
          <MainTitle title={title} />
          {privacy.map((item, index) => {
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

export default PrivacyPolicy;

const styles = StyleSheet.create({});
