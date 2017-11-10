import Firebase from '../firebase'

class Database {
	constructor() {
		this.db = undefined;
	}

	init() {
		if (this.db === undefined) {
			this.db = Firebase.database();
		}
		initEventCollection();
	}

	insert() {
		this.db.ref('users/jojo/okko').set({
			username: "name",
			email: "email",
			profile_picture : "imageUrl"
		  });
	}

}

function initEventCollection() {
	db.collection('events', function(err, collection) {
		collection.remove({}, function(err, removed) {
		});
	});

	db.collection('events').insert({
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
	}, function(err, data) {
		// Log de consola
		console.log("Insertado el registro en la colección.");
	});
}


export default Database;
