import Express from 'express';
import Promise from 'promise';
import Firebase from '../firebase'
import Database from '../db/database'

class Controller {
	constructor() {
		this.router = Express.Router();
		this.db = new Database();
		this.auth = Firebase.auth();
		this.auth.onAuthStateChanged(((user) => {
			if (user) {
				this.db.init();
			}
		}).bind(this));
	}

	get routes() {
		return this.router;
	}

	get checkLogin () {
		return (req, res, next) => {
			if (req.headers.authorization === undefined) {
				res.sendStatus(401);
			} else {
				this.getUser(req.headers.authorization).then(() => next()).catch((error) => res.sendStatus(401));
			}
		};
	}

	getUser(idToken) {
		return new Promise((success, reject) => {
			this.auth.signInWithCredential(Firebase.auth.GoogleAuthProvider.credential(idToken))
				.then(success)
				.catch(reject);
		});
	}

}

export default Controller;
