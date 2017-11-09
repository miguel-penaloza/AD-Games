import Express from 'express';
import Database from '../db/database'

 class Controller {
	constructor() {
		this.router = Express.Router(); 
		this.db = new Database();
	}

	get routes() {
		return this.router;
	}

}

export default Controller;