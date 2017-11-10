import Express from 'express';
import Promise from 'promise';
import Firebase from '../firebase'
import Database from '../db/database'

class Controller {
	constructor() {
		this.router = Express.Router();
		this.db = new Database();
		this.auth = Firebase.auth();
		this.auth.onAuthStateChanged((user) => {
			if (user) {
				this.db.init();
			}
		});
	}

	get routes() {
		return this.router;
	}

	get checkLogin () {
		return (req, res, next) => {
			this.getUser('eyJhbGciOiJSUzI1NiIsImtpZCI6IjM5YzdiMjEyMmJmMTE2NGMyNzYyZTE1NzU5MzQ5MzIxNjQ4MjI4MWMifQ.eyJhenAiOiI4NjM5ODMyNDk5NTctYWFndG5pMGdra2M0YTBocjFwNGxhcjRyYWIzMGRjdWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NjM5ODMyNDk5NTctYWFndG5pMGdra2M0YTBocjFwNGxhcjRyYWIzMGRjdWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIyNDY1NjQ4NDQxNTE2NTgzNjgiLCJhdF9oYXNoIjoibnFOR0gwX1ZkWWhaWHFDTS1INzk2ZyIsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJqdGkiOiJhZDNhMTg2MGViODAxMDI2ZjBmMDhiNjE1NTZhY2IxY2RkNjhhOTgyIiwiaWF0IjoxNTEwMzQwNzQxLCJleHAiOjE1MTAzNDQzNDF9.hi4bkyo7SHfNsJj1j3WHc4mkW9ZzkwQxsOpGA6rdhWcCXOCu3gewcyczWjSctTf2viV_f5JeLkLCxlia2B7uxAhdkb49ua1Rjcpwd7E0ddBqtekKjtxWjgQHMIfw2l-uUYfiOYqHvrd5hZfVF1CKIEcsgr5__u9vK2fuyAHuWZ0NnlFe8B0U7m8KlfRRvKyvveqT-nsakycQ4-UbbgNnUbJh1nR-R2k8fFZ3L7Wc-4_QLm8y31yBVdotJTfKicwHiNWGE9sOsuYVoVLQb4C90c2mm5yCNXPDehBuuGJ2pLIRmIGaN0uhO8Q-j1cYxat8xL_dNzoZweEDn9rnzq0FSg')
			.then(() => next())
			.catch((error) => {
				console.log(error);
				res.sendStatus(401);
			});
		};
	}

	getUser(idToken) {
		return new Promise((success, reject) => {
			this.auth.signInWithCredential(Firebase.auth.GoogleAuthProvider.credential(idToken))
				.then(success)
				.catch(reject);
		});
	}

	anonymous() {
		return new Promise((success, reject) => { this.auth.signInAnonymously().then(success).catch(reject);});
	}

}

export default Controller;
