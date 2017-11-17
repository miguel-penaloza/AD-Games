import Controller from './controller';
import Event from '../model/event'

class EventsController extends Controller {
	constructor() {
		super();
		this.router.get('/events', this.checkLogin, this.getEvents.bind(this));
		this.router.get('/events/:id', this.checkLogin, this.getEventById.bind(this));
		this.router.post('/events', this.create.bind(this));
		//this.router.get('/events/vote', this.getEventById.bind(this));
	}

	getEvents(req, res) {
		Event.getInstace(this.db).getList().then((val) => res.send(val)).catch((error) => res.send([]));
	}

	getEventById(req, res) {
		try {
			Event.getInstace(this.db).getById(req.params.id).then((val) => {
				if (val == null) {
					res.sendStatus(404);
				} else {
					res.send(val);
				}
			}).catch((error) => res.sendStatus(500));
		} catch (e) {
			console.log();
			res.sendStatus(400);
		}
	}

	create(req, res) {
		Event.getInstace(this.db).create(req.body).then((val) => res.send(val)).catch((error) => res.sendStatus(500));
	}

}

export default EventsController;
