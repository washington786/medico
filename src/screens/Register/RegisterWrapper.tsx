import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,Alert,
} from "react-native";
import React from "react";
import BackgroundWrapper from "../../components/Auth/BackgroundWrapper";
import { url } from "../Login/LoginWrapper";
import LoginBottomView from "../../components/Auth/LoginBottomView";
import Top from "../../components/Auth/Top";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../Globals/Colors";
import ScrollWrapper from "../../Globals/ScrollWrapper";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import * as yup from 'yup'
import { db,auth } from "../../components/Auth/firebase";
import { ref,child,set } from "firebase/database";

const isIos = Platform.OS === "ios";

const height = Dimensions.get("window").height;

const RegisterWrapper = () => {
  let title: string = "Create account";
  let subtitle: string = "please enter valid credentials to create an account.";
  return (
    <BackgroundWrapper url={url}>
      <LoginBottomView style={styles.btmView}>
        <Top title={title} subtitle={subtitle} />
        <InputWrapper />
      </LoginBottomView>
    </BackgroundWrapper>
  );
};

const InputWrapper = () => {
  const navigation = useNavigation();
  const handleSignIn = (): void => {
    navigation.navigate("login");
  };
  const handleApp = (): void => {
    navigation.navigate("app");
  };
  const ReviewSchem =yup.object({
    Firstname:yup.string().required().min(3),
    Lastname:yup.string().required().min(3),
    email:yup.string().required().min(6),
    password:yup.string().required().min(6)

  })
  const addUser= async (data)=>{
    try{
       const {uid,email,password,Firstname,Lastname} =data
await createUserWithEmailAndPassword(auth,
  email.trim().toLowerCase(),password
).then(res =>{
   
    const MedicoRef=  ref(db,`/MedicoClient`)
    const MedicoChild = child(MedicoRef,res.user.uid)
    set(MedicoChild,{
        Firstname:Firstname,
        Lastname:Lastname,
        email:email.trim().toLowerCase(),
        uid:res.user.uid
      })
      
      navigation.navigate("app")
      })
    }
    catch(error){
      if(error.code === 'auth/email-already-in-use'){
        Alert.alert(
          'That email address is already inuse'
        )
      }
      if(error.code === 'auth/invalid-email'){
        Alert.alert(
          'That email address is invalid'
        )
      }
      else{
        Alert.alert(error.code)
      }
      
    }
    
  }
  return (
    <ScrollWrapper>
      <KeyboardAvoidingView
        keyboardVerticalOffset={isIos ? 100 : 0}
        behavior={isIos ? "padding" : "height"}
      >
        <Formik
        initialValues={{Firstname:'',Lastname:'',email:'',password:'',}}
        validationSchema={ReviewSchem}
        onSubmit={(values,action)=>{
            action.resetForm()
            addUser(values)
        }}
        >
          {(props)=>(
            <>
        <TextInput
          label={"First Name"}
          keyboardType="default"
          keyboardAppearance="light"
          mode="outlined"
          style={styles.input}
          onChangeText={props.handleChange('Firstname')}
        value={props.values.Firstname}
        onBlur={props.handleBlur('Firstname')}
        />
        <Text style={{color:'red',marginTop:-5}}>{props.touched.Firstname && props.errors.Firstname}</Text>
        <TextInput
          label={"Last Name"}
          keyboardType="default"
          keyboardAppearance="light"
          mode="outlined"
          style={styles.input}
          onChangeText={props.handleChange('Lastname')}
        value={props.values.Lastname}
        onBlur={props.handleBlur('Lastname')}
        />
        <Text style={{color:'red',marginTop:5}}>{props.touched.Lastname && props.errors.Lastname}</Text>
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
     <Text style={{color:'red',marginTop:-5}}>{props.touched.email && props.errors.email}</Text>
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
        <Text style={{color:'red',marginTop:-5}}>{props.touched.password && props.errors.password}</Text>
        <Button
          mode="contained"
          style={styles.btnContained}
          labelStyle={styles.label}
          onPress={props.handleSubmit}
        >
          create account
        </Button>
        <Button
          mode="outlined"
          style={styles.btnOutline}
          labelStyle={[styles.label, styles.btnText]}
          onPress={handleSignIn}
        >
          sign in
        </Button>
        </>
         )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollWrapper>
  );
};

export default React.memo(RegisterWrapper);

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
  },

  btnContained: {
    borderRadius: 2,
    backgroundColor: colors.primary_10,
    paddingVertical: 5,
    marginVertical: 6,
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
    paddingVertical: 5,
  },
  btmView: {
    maxHeight: height * 0.6,
    minHeight: height * 0.6,
  },
});
