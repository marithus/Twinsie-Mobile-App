import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

//API access information
const firebaseConfig = {
  apiKey: "AIzaSyAV05iRL2fxt3JFhIbRN1XOagxG1aKVK80",
  authDomain: "chat-6ac94.firebaseapp.com",
  databaseURL: "https://chat-6ac94-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-6ac94",
  storageBucket: "chat-6ac94.appspot.com",
  messagingSenderId: "272351588016",
  appId: "1:272351588016:web:8e1c11f703a9c2716cd575"
};

//initilises the firebase api access
if (!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig);
}

//exported firebase functions for API usage
export const auth = firebase.auth();
export const database = firebase.firestore();
export const storage = firebase.storage();
export {firebase}


