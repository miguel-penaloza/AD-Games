import Promise from 'promise';
import BodyParser from 'body-parser';
import UtilsDatabase from './db/utils-database';
import Configuration from '../configuration';
import EventsController from './controllers/events-controller';
const modules = [
	new EventsController()
];

export default (app) => {
	return new Promise((success, reject) => {
		var start = () => {
			try {
				app.use(BodyParser.urlencoded({ extended: true }));
				app.use(BodyParser.json());
				modules.forEach(m => app.use('/', m.routes));
				require('express-print-routes')(app, require('path').join(__dirname, '../../../routes.txt'));		   
				success(app);			
			} catch (e) {
				reject(e);
			} 
		};
		if (Configuration.initDB) {
			UtilsDatabase.init().then(start).catch(reject);
		} else {
			start()
		}
	});	
};
