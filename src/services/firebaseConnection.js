import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCPA3J_0IZiXXp_NY7nA9GYe9bhPtXw7Sc",
  authDomain: "convivio-6a575.firebaseapp.com",
  projectId: "convivio-6a575",
  storageBucket: "convivio-6a575.appspot.com",
  messagingSenderId: "557283758390",
  appId: "1:557283758390:web:13104e10506d39526f2397",
  measurementId: "G-QZXRYTGEX2"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;