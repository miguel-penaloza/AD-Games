import Controller from './controller';
import Database from '../db/database';
import Event from '../model/event'

class EventsController extends Controller {
	constructor() {
		super();
		this.router.get('/events', this.checkLogin, this.getEvents.bind(this));
		this.router.get('/events/:id', this.getEventById.bind(this));
		this.router.get('/events/vote', this.vote.bind(this));
	}

	getEvents(req, res) {
		this.db.insert();
		console.log(Event);
		res.send(Event.collection);
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
		var votes = req.body.vote;
		var user = req.body.user;

		db.collection('events').findOne({ id: event_id }).toArray(function(err, data) {
			if (err) {
				console.log("Err...");
				console.log(err);
				return res.status(500);
			} else {
				console.log("Data...");

				//TODO date < to finalize event
				if(true) {
					db.collection('events').findOne({votes: user}).toArray(function (err, data) {
						if (err) {
							if(data.type === 'VS'){
								db.collection('events').update(
									{id: event_id},
									{
										$push: {
											votes: {
												'user': user,
												'vote': votes
											}
										}
									}
								)

								db.collection('events').findOne({id: event_id}).update({"score.key": votes.key}, {
										$set: {
											$inc: {votes: +1}
										}
									}
								)
							} else if(data.type === 'RESULT') {
								db.collection('events').update(
									{id: event_id},
									{
										$push: {
											votes: {
												'user': user,
												'vote': votes
											}
										}
									}
								)
							}
						} else {
							if ( data.vote.vote != votes) {
								if(data.type === 'VS') {
									db.collection('events').update(
										{id: event_id, user: user},
										{
											$set: {
												votes: {
													'user': user,
													'vote': votes
												}
											}
										}
									)
									db.collection('events').findOne({id: event_id}).update({"score.key": votes}, {
											$set: {
												$inc: {votes: +1}
											}
										}
									)
									db.collection('events').findOne({id: event_id}).update({"score.key": data.vote.vote}, {
											$set: {
												$inc: {votes: -1}
											}
										}
									)
								} else if(data.type === 'RESULT') {
									db.collection('events').update(
										{id: event_id, user: user},
										{
											$set: {
												votes: {
													'user': user,
													'vote': votes
												}
											}
										}
									)
								}
							}
						}
					})
				}
			}
		})
	}
}

export default EventsController;
