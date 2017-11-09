import EventsController from './controllers/events-controller';
import BodyParser from 'body-parser';
const modules = [
	new EventsController()
];

export default (app) => {
	app.use(BodyParser.urlencoded({ extended: true }));
	app.use(BodyParser.json());
	modules.forEach(m => app.use('/', m.routes));
	require('express-print-routes')(app, require('path').join(__dirname, '../../../routes.txt'));		   
	return app;
};
