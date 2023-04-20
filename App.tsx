import { StatusBar } from "react-native";
import SafeView from "./src/Globals/SafeView";
import { colors } from "./src/Globals/Colors";
import Navigations from "./src/navigation/Nav/Navigations";

// fonts:roboto
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import { ActivityIndicator } from "react-native-paper";
import { MainStyle } from "./src/styles/MainStyle";

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return (
      <SafeView>
        <ActivityIndicator
          size={25}
          color={colors.primary_10}
          style={MainStyle.activity}
        />
      </SafeView>
    );
  } else {
    return (
      <SafeView>
        <StatusBar
          backgroundColor={colors.primary_10}
          barStyle={"light-content"}
          animated={true}
          hidden={false}
        />
        <Navigations />
      </SafeView>
    );
  }
}
