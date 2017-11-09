import Firebase from 'firebase';
Firebase.initializeApp({
    apiKey: "AIzaSyBnL895thjYaf-cXMHHAWCNBJDFY_r1wsI",
    authDomain: "ad-games.firebaseapp.com",
    databaseURL: "https://ad-games.firebaseio.com",
    projectId: "ad-games",
    storageBucket: "ad-games.appspot.com",
    messagingSenderId: "863983249957"
});

export default Firebase;