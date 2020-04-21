import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAd6ZZF54Vr71TikaEJVmztmcUISKXjoQQ",
    authDomain: "react-e-comerce-app.firebaseapp.com",
    databaseURL: "https://react-e-comerce-app.firebaseio.com",
    projectId: "react-e-comerce-app",
    storageBucket: "react-e-comerce-app.appspot.com",
    messagingSenderId: "106660890914",
    appId: "1:106660890914:web:a2e24e917cd682b0e57d7b",
    measurementId: "G-366NBRSPJP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;