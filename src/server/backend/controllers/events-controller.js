import Controller from './controller';
import Event from '../model/event'

class EventsController extends Controller {
	constructor() {
		super();
		this.router.get('/events', this.checkLogin, this.getEvents.bind(this));
		this.router.get('/events/:id', this.checkLogin, this.getEventById.bind(this));
		//this.router.get('/events/vote', this.getEventById.bind(this));
	}

	getEvents(req, res) {
		Event.getInstace(this.db).getList().then((val) => res.send(val)).catch((error) => res.send([]));
	}

	getEventById(req, res) {
		try {
			var id = parseInt(req.params.id);
			if (isNaN(id)) {
				res.sendStatus(400);
			} else {
				Event.getInstace(this.db).getById(id).then((val) => {
					if (val == null) {
						res.sendStatus(404);
					} else {
						res.send(val);
					}
				}).catch((error) => res.sendStatus(500));
			}
		} catch (e) {
			res.sendStatus(400);
		}
	}

}

export default EventsController;
