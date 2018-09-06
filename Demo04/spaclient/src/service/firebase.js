import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAF4PhLFCqHYXeylovsMBbNwBH2zIYre8M",
    authDomain: "cropchat-142ff.firebaseapp.com",
    databaseURL: "https://cropchat-142ff.firebaseio.com",
    projectId: "cropchat-142ff",
    storageBucket: "cropchat-142ff.appspot.com",
    messagingSenderId: "215117566931"
  };
  firebase.initializeApp(config);

export default {
 database: firebase.database()
}