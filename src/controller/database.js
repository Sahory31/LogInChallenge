import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD-Qbr2zKEtrkn3Am5YP-KiQrIzA9Bo-0Q",
    authDomain: "loginblackfor.firebaseapp.com",
    databaseURL: "https://loginblackfor.firebaseio.com",
    projectId: "loginblackfor",
    storageBucket: "loginblackfor.appspot.com",
    messagingSenderId: "599649939276",
    appId: "1:599649939276:web:233760decf54b1a27029e9"
}

const firebaseApi = firebase.initializeApp(firebaseConfig);

export default firebaseApi;