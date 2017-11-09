import Controller from './controller';

class EventsController extends Controller {
	constructor() {
		super();
		this.router.get('/events', this.getEvents.bind(this));
		this.router.get('/events/:id', this.getEventById.bind(this));
		this.router.get('/events/vote', this.getEventById.bind(this));
	}

	getEvents(req, res) {
		db.collection('events').find().toArray(function(err, data) {
			if (err) {
				console.log(err);
				return res(err);
			} else {
				console.log(data);
				return res.json(data);
			}
		})
		//this.db.insert();
		//this.getUser().then(console.log).catch(console.log);
		this.anonymous().then(console.log).catch(console.log);
		res.send('GET request to the homepage');
	}

	getEventById(req, res) {
		let event_id = parseInt(req.params.id);
		db.collection('events').findOne({ id: event_id }, function(err, data) {
			if (err) {
				console.log(err);
				return res(err);
			} else {
				console.log(data);
				return res.json(data);
			}
		})
	}

	vote(req, res) {
		var event_id = req.body.eventId;
		var vote = req.body.vote;
		var user = req.body.user;

		db.collection('events').findOne({ id: event_id }).toArray(function(err, data) {
			if (err) {
				console.log("Err...");
				console.log(err);
				return res.status(500);
			} else {
				console.log("Data...");

				db.collection('events').findOne({votes: user}).toArray(function(err, data){
					if(err) {
						db.collection('events').update(
							{id: event_id},
							{$push: {votes: {'user': user, 'vote': vote}}}
						)

						db.collection('events').findOne({id: event_id}).update({ "score.key": vote }, {
								$set: {
									$inc: { votes: +1 }
								}
							}
						)
					} else {
						if( data.vote.vote != vote ) {
							db.collection('events').update(
								{id: event_id, user: user},
								{$set: {
									votes: {'vote': vote}}
								}
							)
							db.collection('events').findOne({id: event_id}).update({ "score.key": vote }, {
									$set: {
										$inc: { votes: +1 }
									}
								}
							)
							db.collection('events').findOne({id: event_id}).update({ "score.key": data.vote.vote }, {
									$set: {
										$inc: { votes: -1 }
									}
								}
							)
						}
					}
				})
			}
		})
	}
}

export default EventsController;
