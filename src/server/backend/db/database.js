import Firebase from '../firebase'
import Promise from 'promise';

class Database {
	constructor() {
		this.db = undefined;
	}

	init() {
		if (this.db === undefined) {
			this.db = Firebase.database();
		}
	}

	getList(collection)  {
		return new Promise((success, reject) => {
			try {
				this.db.ref(collection).once('value').then((snapshot) =>  success(snapshot.val())).catch(reject);
			} catch (e) {
				reject(e);
			}
		}); 
	}

}

export default Database;
