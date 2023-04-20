import React from "react";
import MainView from "../../Globals/MainView";
import LoginWrapper from "./LoginWrapper";

const Login = () => {
  return <MainView>
    <LoginWrapper/>
  </MainView>;
};

export default React.memo(Login);
