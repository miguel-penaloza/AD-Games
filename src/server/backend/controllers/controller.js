import Express from 'express';
import Promise from 'promise';
import Firebase from '../firebase'
import Database from '../db/database'

 class Controller {
	constructor() {
		this.router = Express.Router(); 
		this.db = new Database();
		this.auth = Firebase.auth();
	}

	get routes() {
		return this.router;
	}

	capture(fn, res) {
		try {
			fn();
		} catch(e) {
			res.send();
		}
	}

	getUser(idToken) {
		return new Promise((success, reject) => {
			this.signInWithCredential(this.auth.GoogleAuthProvider.credential(idToken))
				.then(success)
				.catch(reject);
		});
	}

	login(email, password) {
		return new Promise((success, reject) => { this.auth.signInWithEmailAndPassword(email, password).then(success).catch(reject);});
	}

	anonymous() {
		return new Promise((success, reject) => { this.auth.signInAnonymously().then(success).catch(reject);});
	}

}

export default Controller;