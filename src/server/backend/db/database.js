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

	persistDataTest() {
		this.db.ref('events').set( [{
			id: 1,
			name: 'Leo vs Damian',
			type: 'BOXEO',
			date: new Date(),
			canChangeVote: false,
			votes: [{
				user: 'matias.sagasti@appdirect.com',
				vote: 'LEO'
			}],
			score: [{
				key: 'LEO',
				votes: 1,
				key: 'DAMIAN',
				votes: 0
			}]
		}, {
				id: 2,
				name: 'Argentina VS Ecuador',
				type: 'RESULT',
				date: new Date(),
				toDate: new Date(),
				canChangeVote: true,
				votes: [{
					user: 'matias.sagasti@appdirect.com',
					vote: [{key:'Argentina', value:'3'}, {key:'Ecuador', value:'1'}]
				}],
				score:[{key:'ARG'},{key:'ECU'}]
			}
		], function(err, data) {
			// Log de consola
			console.log("Insertado el registro en la colección.");
		});
	}
}

export default Database;
