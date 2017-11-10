import Promise from 'promise';

class Model {
	constructor(collection, db) {
		this.collection = collection;
		this.db = db;
	}

	getList() {
		return this.db.getList(this.collection);
	}

	getById(id) {
		return this.db.getById(this.collection, id);
	}

}

export default Model;