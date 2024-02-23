import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBo2d0zdZEstcrcBoZWz146zp6yXnytID4",
    authDomain: "disneyplus-clone-dd0d8.firebaseapp.com",
    projectId: "disneyplus-clone-dd0d8",
    storageBucket: "disneyplus-clone-dd0d8.appspot.com",
    messagingSenderId: "799036123607",
    appId: "1:799036123607:web:eb8369f59556ac71d58392",
    measurementId: "G-SDRWS8PLXW"
};

const app = initializeApp(firebaseConfig);
/* const firebaseApp = firebase.initializeApp(firebaseConfig); */
/* const db = app.firestore();*/
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
/* const storage = app.storage(); */

export { auth, provider, /* storage */ };
/* export default db; */