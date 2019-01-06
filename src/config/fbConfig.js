import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBRVkkLI2WwxW6w5Q8UZqw3Zs1sTGPVfkE",
    authDomain: "mario-528c8.firebaseapp.com",
    databaseURL: "https://mario-528c8.firebaseio.com",
    projectId: "mario-528c8",
    storageBucket: "mario-528c8.appspot.com",
    messagingSenderId: "469876131897"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase