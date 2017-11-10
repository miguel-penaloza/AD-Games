import Server from './backend';
import Express from 'express';

Server(Express()).then((app) => app.listen(4000, () => console.log("Listenig port 4000"))).catch(console.log);
