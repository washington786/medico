import { StyleSheet } from "react-native";
import React, { useState } from "react";
import MainView from "../../../Globals/MainView";
import { Header } from "../History/History";
import InstructionsCard from "../../../components/main/instructions/InstructionsCard";
import { instructions } from "../../../data/Instructions";
import Scroller from "../../../Globals/Scroller";

const Info = () => {
  const [isActive, setIsActive] = useState(false);
  const onPress = (id: number) => {
    var found = instructions.find((info) => {
      return info.id === id;
    });
    console.log(found);
    if (found) {
      setIsActive(!isActive);
    } else {
      setIsActive(false);
    }
  };

  return (
    <MainView>
      <Header title={"Information"} />
      <Scroller>
        {instructions.map((info) => {
          const { id, title, steps } = info;
          return (
            <InstructionsCard
              id={id}
              isActive={isActive}
              steps={steps}
              title={title}
              onPress={onPress.bind(this, id)}
            />
          );
        })}
      </Scroller>
    </MainView>
  );
};

export default React.memo(Info);

const styles = StyleSheet.create({});
