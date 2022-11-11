import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDCms6zbEadt19-wkwHpexj2XwFEO-lLmo",
    authDomain: "react-roundtwo.firebaseapp.com",
    projectId: "react-roundtwo",
    storageBucket: "react-roundtwo.appspot.com",
    messagingSenderId: "360446140055",
    appId: "1:360446140055:web:6d6f9944f93f48667d93d2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const login = () => {
    signInWithPopup(auth, provider)
    // .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // console.log(user)
    //     // ...
    // }).catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    // });
}

const logout = () => {
    const auth = getAuth();
    signOut(auth)
    // .then(() => {
    //     // Sign-out successful.
    // }).catch((error) => {
    //     // An error happened.
    // });
}

export {
    login,
    logout,
    auth
}