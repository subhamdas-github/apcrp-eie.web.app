import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAEZ_0yLmx8-rklA4di8Tcrs1ocoiCzEtc",
  authDomain: "apcrp-eie.firebaseapp.com",
  databaseURL: "https://apcrp-eie-default-rtdb.firebaseio.com",
  projectId: "apcrp-eie",
  storageBucket: "apcrp-eie.appspot.com",
  messagingSenderId: "93094625915",
  appId: "1:93094625915:web:b8b28f40a85685da4198de"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAovERkQMI91MS0TrHcZ7bBVTJX-GyrCrQ",
//   authDomain: "eie-apcraypolytechnic.firebaseapp.com",
//   projectId: "eie-apcraypolytechnic",
//   storageBucket: "eie-apcraypolytechnic.appspot.com",
//   messagingSenderId: "204057176731",
//   appId: "1:204057176731:web:979e466c5f6edda4c8b43e",
//   measurementId: "G-QQHW4MX2RP"
// };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
 export {
   storage, fire as default
 }