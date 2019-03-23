import firebase from 'firebase';

const config = {
  
  apiKey: "AIzaSyDxmgvhIM0NejSg_BxYAI_aQmMNnpIcQuQ",
  authDomain: "gamedaytrivia.firebaseapp.com",
  databaseURL: "https://gamedaytrivia.firebaseio.com",
  projectId: "gamedaytrivia",
  storageBucket: "gamedaytrivia.appspot.com",
  messagingSenderId: "345031392915"
  };

firebase.initializeApp(config);

export default firebase;
