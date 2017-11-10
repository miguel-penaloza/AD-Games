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
			this.getUser('eyJhbGciOiJSUzI1NiIsImtpZCI6IjM5YzdiMjEyMmJmMTE2NGMyNzYyZTE1NzU5MzQ5MzIxNjQ4MjI4MWMifQ.eyJhenAiOiI4NjM5ODMyNDk5NTctYWFndG5pMGdra2M0YTBocjFwNGxhcjRyYWIzMGRjdWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NjM5ODMyNDk5NTctYWFndG5pMGdra2M0YTBocjFwNGxhcjRyYWIzMGRjdWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDQyMDUxOTI4NzI2NjY4MzY4MTYiLCJhdF9oYXNoIjoiNTZtdEhXWlB6RnZReXVhdG9LSEQyQSIsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJqdGkiOiI4YTRhNDQ1Y2UyOWM5MjAyZDUwNGZmZWZhMjQwOWRkNWEwMmFmYTY1IiwiaWF0IjoxNTEwMjkzMTI5LCJleHAiOjE1MTAyOTY3Mjl9.GzJIHogpY142mbOKFwmbYJk1S7jdEsCcOjE30h_AZBfgzun7bGnRtKmGUIAeS8b9irhVdi-siVUJXyNwvyNAzi02G-rib3yIRz4kXXmahODGUqJlyd4NveHt1LfojYVGnE2NzT2yZ1deJT_nPdm4voVNkPSlNLPptua6bgu0DJsvtdnA8_8RcG7rQXCM163syIOwQBFvcUhC3-nWvx-KWZcIbDi3powkkeKcw5syfyh-7uCx7m2nNul-fz31-Nqo640OaW2q4e2LnrBCkCpo_FJ2ddvT4eXNJLnNF_MgjAqZAnGjWW0zHleWJhrrAZKEUGxwBwXIlwJLcciELAFuTw')
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