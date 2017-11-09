import Controller from './controller';

class EventsController extends Controller {
	constructor() {
		super();
		this.router.get('/events', this.getEvents.bind(this));
	}

	getEvents(req, res) {
		this.db.insert();
		res.send('GET request to the homepage');
	}

}

export default EventsController;