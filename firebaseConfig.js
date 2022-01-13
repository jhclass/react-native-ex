import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyCfKPMRhaSb93lux6fCgequnY6ohLS7HjU",
    authDomain: "sparta-myhoneytop-jin.firebaseapp.com",
    databaseURL: "https://sparta-myhoneytop-jin-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sparta-myhoneytop-jin",
    storageBucket: "sparta-myhoneytop-jin.appspot.com",
    messagingSenderId: "687813224180",
    appId: "1:687813224180:web:439f0b52d8392f22c8e0a1",
    measurementId: "G-QXFDJGDCHP"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()