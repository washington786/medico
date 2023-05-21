import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';
import {getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyDKDBVkBRUxBCxoXjaXf_4s9i6WW1OWpyQ",
    authDomain: "todoreact-aa7f6.firebaseapp.com",
    databaseURL: "https://todoreact-aa7f6-default-rtdb.firebaseio.com",
    projectId: "todoreact-aa7f6",
    storageBucket: "todoreact-aa7f6.appspot.com",
    messagingSenderId: "101348855211",
    appId: "1:101348855211:web:ebd5a14ba09fca0f0b96ee"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const db = getDatabase(app)
export {auth, firestore,storage,db};