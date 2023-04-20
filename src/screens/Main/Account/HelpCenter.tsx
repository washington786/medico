import { Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ScrollWrapper from "../../../Globals/ScrollWrapper";
import MainWrapperView from "../../../components/main/MainWrapperView";
import HeaderBack from "../../../components/main/settings/HeaderBack";
import Scroller from "../../../Globals/Scroller";
import {
  Card,
  List,
  Paragraph,
  Text,
  Divider as Div,
} from "react-native-paper";
import { colors, rgba } from "../../../Globals/Colors";

import Icons from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";
import { roboto } from "../../../Globals/Fonts";
import { Divider } from "react-native-elements";

const isIos = Platform.OS === "ios";

const faq_data = [
  {
    title: "Who is covered by Ems?",
    description:
      "Any registered TUT student. The student is covered for the entire academic year including holidays.",
    id: 1,
  },
  {
    title:
      "Can this number be called from any cell phone or any telephone in South Africa?",
    description:
      "Yes, any phone or service provider including Cell C, MTN, 8ta and Vodacom can be used and calls are charged at standard cell phone rates.",
    id: 2,
  },
  {
    title: "When can I call Maponya 911 for assistance?",
    description: "When a student has a medical emergency",
    id: 3,
  },
  {
    title: "What do you say when Maponya 911 answers the call?",
    description:
      "I have an emergency and I am a student from Tshwane University of Technology.",
    id: 4,
  },
  {
    title: "What number are you calling from?",
    description:
      "Give the telephone number you are calling from in case the call taker needs to call you back or if the phone gets disconnected while you are talking",
    id: 5,
  },
  {
    title:
      "Will the TUT student be transported to a private hospital or a provincial hospital?",
    description:
      "Maponya 911 is not a medical aid so if a student is not on a medical aid, they will be taken to the closest provincial hospital. If the student does have a medical aid, they will be taken to the closest most appropriate private hospital. Any costs from when you arrive at the hospital will be for the students own account.",
    id: 6,
  },
];
const HelpCenter = () => {
  let title: string = "Help Center";
  let whatsappNo: string = "+2782 969 0666";
  let callNo: string = "+2711 958 9085";
  return (
    <ScrollWrapper>
      <MainWrapperView>
        <HeaderBack title={title} />
        <Scroller>
          <Info />
          <Card mode="contained" style={styles.card}>
            <Text variant="bodyMedium">Help Center Info</Text>
            <Card.Content>
              <CardContent icon="mail" title="medico@yahoo.co.za" />
              <CardContent icon="phone" title={callNo} />
              <CardContents icon="whatsapp" title={whatsappNo} />
            </Card.Content>
          </Card>
          <Accordion />
        </Scroller>
      </MainWrapperView>
    </ScrollWrapper>
  );
};

interface content {
  title: string;
  icon: string;
}
const CardContent = (props: content) => {
  return (
    <View style={styles.content}>
      <Icons name={props.icon} size={20} color={rgba.grey_4} />
      <Paragraph style={styles.title}>{props.title}</Paragraph>
    </View>
  );
};

const CardContents = (props: content) => {
  return (
    <View style={styles.content}>
      <Icon name={props.icon} size={20} color={rgba.grey_4} />
      <Paragraph style={styles.title}>{props.title}</Paragraph>
    </View>
  );
};

const Info = () => {
  return (
    <Card mode="contained" style={styles.info} contentStyle={styles.content}>
      <Icons name={"info"} size={20} color={rgba.grey_4} />
      <Paragraph style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        for any emergency, contact us using the below details
      </Paragraph>
    </Card>
  );
};

interface ac {
  id: number;
  title: string;
  desc: string;
  expand: boolean;
  onExpand?(index: number): void;
}

const Accordion = () => {
  const [expanded, setExpanded] = useState<Boolean | any>(false);
  const onExpand = (id: number): void => {
    if (!id) {
      setExpanded(false);
    }
    if (id) {
      setExpanded(!expanded);
    }
  };
  return (
    <List.Section
      title="Frequently asked questions"
      titleStyle={styles.accTitle}
    >
      {!isIos ? <Divider orientation="horizontal" width={0.5} /> : <Div />}
      {faq_data.map((item) => {
        return (
          <AccordionItem
            desc={item.description}
            title={item.title}
            expand={expanded}
            key={item.id}
            onExpand={onExpand.bind(this, item.id)}
            id={item.id}
          />
        );
      })}
    </List.Section>
  );
};

const AccordionItem = (props: ac) => {
  return (
    <List.Accordion
      title={props.title}
      expanded={props.id ? !props.expand : props.expand}
      onPress={props.onExpand?.bind(this, props.id)}
      titleNumberOfLines={2}
      id={props.id}
    >
      <Text variant="bodySmall" style={styles.listTxt}>
        {props.desc}
      </Text>
    </List.Accordion>
  );
};
export default HelpCenter;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 8,
    paddingVertical: 7,
    borderRadius: 0,
    backgroundColor: colors.primary_1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  title: {
    paddingHorizontal: 8,
    fontFamily: roboto.light,
  },
  info: {
    borderRadius: 50,
    backgroundColor: "#fbfefb",
    marginVertical: 5,
  },
  listTxt: {
    textAlign: "justify",
    paddingHorizontal: 15,
  },
  accTitle: {
    fontFamily: roboto.medium,
    fontSize: 16,
  },
});
