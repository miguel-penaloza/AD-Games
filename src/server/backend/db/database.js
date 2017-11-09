import Firebase from 'firebase';
Firebase.initializeApp({
    apiKey: "AIzaSyBnL895thjYaf-cXMHHAWCNBJDFY_r1wsI",
    authDomain: "ad-games.firebaseapp.com",
    databaseURL: "https://ad-games.firebaseio.com",
    projectId: "ad-games",
    storageBucket: "ad-games.appspot.com",
    messagingSenderId: "863983249957"
});
class Database {
    constructor() {
        this.db = Firebase.database();
    }

    insert() {
        this.db.ref('users/jojo').set({
            username: "name",
            email: "email",
            profile_picture : "imageUrl"
          });
    }
}

export default Database;