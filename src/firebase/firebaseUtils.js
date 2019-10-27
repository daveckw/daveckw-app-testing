import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAx9U3EYg8Hp0FHpEM-iXJHzrD5L4MSt0w",
    authDomain: "daveckw-app.firebaseapp.com",
    databaseURL: "https://daveckw-app.firebaseio.com",
    projectId: "daveckw-app",
    storageBucket: "daveckw-app.appspot.com",
    messagingSenderId: "151188809106",
    appId: "1:151188809106:web:637ff722ed4b9a791b8d4b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore();

// async function testDB() {
//     const usersRef = await db.collection('users');
//     const usersSnapshots = await usersRef.get();
//     console.log(usersSnapshots.docs);

//     usersSnapshots.docs.forEach(doc => {
//         console.log(doc.data());
//     })

//     return usersSnapshots;
// }


export default firebase;



