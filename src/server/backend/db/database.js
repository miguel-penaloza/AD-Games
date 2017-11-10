import Firebase from '../firebase'

class Database {
	constructor() {
		this.db = undefined;
	}

	init() {
		if (this.db === undefined) {
			this.db = Firebase.database();
		}
	}

	insert() {
		this.db.ref('users/jojo/okko').set({
			username: "name",
			email: "email",
			profile_picture : "imageUrl"
		  });
	}

}

export default Database;