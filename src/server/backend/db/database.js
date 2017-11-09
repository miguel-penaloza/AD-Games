import Firebase from '../firebase'

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