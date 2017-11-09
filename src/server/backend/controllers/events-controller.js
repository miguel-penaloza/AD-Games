import Controller from './controller';

class EventsController extends Controller {
	constructor() {
		super();
		this.router.get('/events', this.getEvents.bind(this));
	}

	getEvents(req, res) {
		//this.db.insert();
		//this.getUser().then(console.log).catch(console.log);
		this.anonymous().then(console.log).catch(console.log);
		res.send('GET request to the homepage');
	}

}

export default EventsController;