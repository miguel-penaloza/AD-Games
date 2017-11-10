import Model from './model';

class Event extends Model {
	static get collection() {
		return 'events';
	}

	static getInstace(db) {
		return new Event(db);
	}

	constructor(db) {
		super(Event.collection, db);
	}
	
}

export default Event;