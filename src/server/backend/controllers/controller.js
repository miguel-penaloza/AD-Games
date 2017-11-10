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
			this.getUser('eyJhbGciOiJSUzI1NiIsImtpZCI6IjFjMTYxMDBmODU0YzQ0MzEzM2E3NTI4MDZjYmU1MmRjMWQ3YzJjZDAifQ.eyJhenAiOiI4NjM5ODMyNDk5NTctYWFndG5pMGdra2M0YTBocjFwNGxhcjRyYWIzMGRjdWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NjM5ODMyNDk5NTctYWFndG5pMGdra2M0YTBocjFwNGxhcjRyYWIzMGRjdWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDQxMjQ1MTE2MTY1MjgwNDE1NDgiLCJhdF9oYXNoIjoic0JYZmwwZ2ZwUWZJTktjaGd6QWwtQSIsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJqdGkiOiJjZmY1MTc4NDY5ZGNiMzVjZTQ5Njk4ZjM5NTcxYzlkYjY0MDI0NzQ3IiwiaWF0IjoxNTEwMzQ0NjUyLCJleHAiOjE1MTAzNDgyNTJ9.I8bm2W37h-QlWtHfp_-YIFIaCUfwIB2SiX_RCuRBSV2VGB9GSdK2UgAhJcR1LHwU0HhVcxe4whuAJIcHfGp_cIM6MTRTEGXzio_gE26NlMdinSSjDDyOZ-VCCwWU_RRIJALs8BcNKCl8tP58aGDB8P46sBLBOaxpR3ivNTotZ9LUzecVkeMt86eVAT8Z_SP3DsJOhZSIwflGkW1y5XgdaB8HKAj8qQE5G8ZrwIqLCa493YpaJJUT6I40oDGiVGWYEN7GR0F6gVLSnaeURjahp-CwTYuL84iKHskqEdWaTqpjo1pGHv2_4oQ6qHxCbpolYfOzGJRix6xixGrzCppE6g')
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
