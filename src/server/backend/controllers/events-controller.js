import Controller from './controller';
import Database from '../db/database';
import Event from '../model/event'

class EventsController extends Controller {
	constructor() {
		super();
		this.router.get('/events', this.checkLogin, this.getEvents.bind(this));
		this.router.get('/events/:id', this.getEventById.bind(this));
		//this.router.get('/events/vote', this.getEventById.bind(this));
	}

	getEvents(req, res) {
		Event.getInstace(this.db).getList().then((val) => res.send(val)).catch((error) => []);
	}

	getEventById(req, res) {
		try {
			Event.getInstace(this.db).getById(parseInt(req.params.id)).then((val) => res.send(val)).catch((error) => {});
		} catch (e) {
			console.log(e);
			res.sendStatus(400);
		}
	}

}

export default EventsController;
