import React from "react";
import MainView from "../../Globals/MainView";
import RegisterWrapper from "./RegisterWrapper";

const Register = () => {
  return (
    <MainView>
      <RegisterWrapper />
    </MainView>
  );
};

export default React.memo(Register);
