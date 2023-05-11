import { KeyboardAvoidingView, Platform, StyleSheet, View ,Alert,Text} from "react-native";
import React from "react";
import { colors } from "../../Globals/Colors";
import {
  Button,
  TextInput,
} from "react-native-paper";
import BackgroundWrapper from "../../components/Auth/BackgroundWrapper";
import Top from "../../components/Auth/Top";
import LoginBottomView from "../../components/Auth/LoginBottomView";
import ScrollWrapper from "../../Globals/ScrollWrapper";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from 'yup'
import { auth } from "../../components/Auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
export let url =
  "https://images.pexels.com/photos/8442280/pexels-photo-8442280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const isIos = Platform.OS === "ios";

const LoginWrapper = () => {
  let title: string = "Login Into Account";
  let subtitle: string = "please entered your registered credentials to login.";
  return (
    <BackgroundWrapper url={url}>
      <LoginBottomView>
        <Top title={title} subtitle={subtitle} />
        <InputWrapper />
      </LoginBottomView>
    </BackgroundWrapper>
  );
};

const InputWrapper = () => {
  const navigation = useNavigation();
    const handleSignUp=():void=>{
        navigation.navigate('register');
    }
    const handleReset=():void=>{
        navigation.navigate('reset');
    }
    const handleApp=():void=>{
        navigation.navigate('app');
    }
    const ReviewSchem=yup.object({
      email:yup.string().required().min(6),
      password:yup.string().required().min(6),
      
  })
  const Submit = async (data) => {
 
    try {
        const { email, password } = data
      await 
            signInWithEmailAndPassword(
                auth,email.trim().toLowerCase(), password)
                .then(async res => {
  
                try {
  
                    const jsonValue = JSON.stringify(res.user)
                    await AsyncStorage.setItem("MedicoClient", res.user.uid)
                    navigation.navigate('app');
                } catch (e) {
                    // saving error
                    console.log('no data')
                }
            })
  
    }
    catch (error) {
  
        Alert.alert(
            error.name,
            error.message
        )
    }
  }
  return (
    <ScrollWrapper>
       <Formik
                  initialValues={{email:'',password:''}}
                 validationSchema={ReviewSchem}
                 onSubmit={(values,action)=>{
                     action.resetForm()
                     Submit(values)
                 }}
                 >
                     {(props)=>(
      <KeyboardAvoidingView
        keyboardVerticalOffset={isIos ? 800 : 0}
        behavior={isIos ? "padding" : "height"}
        enabled={true}
      >
        <TextInput
          label={"Email"}
          keyboardType="email-address"
          keyboardAppearance="light"
          mode="outlined"
          style={styles.input}
          onChangeText={props.handleChange('email')}
        value={props.values.email}
        onBlur={props.handleBlur('email')}
        />
        <Text style={{color:'red',marginTop:-15}}>{props.touched.email && props.errors.email}</Text>
        <TextInput
          label={"Password"}
          keyboardType="default"
          keyboardAppearance="light"
          secureTextEntry
          mode="outlined"
          style={styles.input}
          onChangeText={props.handleChange('password')}
          value={props.values.password}
          onBlur={props.handleBlur('password')}
        />
        <Text style={{color:'red',marginTop:-15}}>{props.touched.password && props.errors.password}</Text>
        <Button
          mode="text"
          style={styles.btn}
          labelStyle={styles.btnText}
          onPress={handleReset}
        >
          Forgot Password
        </Button>

        <Button
          mode="contained"
          style={styles.btnContained}
          labelStyle={styles.label}
          onPress={handleApp}
        >
          sign in
        </Button>

        <Button
          mode="outlined"
          style={styles.btnOutline}
          labelStyle={[styles.label, styles.btnText]}
          onPress={handleSignUp}
        >
          create account
        </Button>

        {isIos && <Views />}
      </KeyboardAvoidingView>
      )}
      </Formik>
    </ScrollWrapper>
  );
};

export default React.memo(LoginWrapper);

const Views = () => {
  return <View style={styles.w} />;
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
  },
  btn: {
    alignSelf: "flex-end",
  },
  btnContained: {
    borderRadius: 2,
    backgroundColor: colors.primary_10,
  },
  label: {
    textTransform: "uppercase",
  },
  btnText: {
    color: colors.primary_8,
  },
  btnOutline: {
    marginVertical: 8,
    borderRadius: 2,
  },
  w: {
    height: 200,
    paddingBottom: 300,
  },
});
