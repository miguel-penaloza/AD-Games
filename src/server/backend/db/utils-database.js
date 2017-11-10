import Promise from 'promise';
import Firebase from '../firebase'
import EventData from './data/events'
import Event from '../model/event'
import Configuration from '../../configuration';

const collections = [
	{model: Event, data: EventData}
];

class UtilsDatabase {
	static init() {
		return new Promise((success, reject) => {
			this.getDB().then((db) => {
				try {
					Promise.all(collections.map((data) => new Promise((success, reject) => 
						db.ref(data.model.collection).once('value', (snapshot) => {
							if (!(snapshot.val() !== null)) {
								db.ref(data.model.collection).set(data.data).then(success).catch(reject);
							}	else {
								success();
							}
						})
					))).then(success).catch(reject);
				} catch(e) {
					reject(e);
				}
			}).catch(reject);
		});
	}

	static getDB() {
		return new Promise((success, reject) => {
			Firebase.auth().signInWithEmailAndPassword(Configuration.adminEmail, Configuration.adminPassword)
				.then(user => {
					if(user) {
						success(Firebase.database());
					} else {
						reject();
					}
				})
				.catch(reject);
		});
	}

}

export default UtilsDatabase;



