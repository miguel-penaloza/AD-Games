import Server from './backend';
import Express from 'express';

Server(Express()).listen(4000, () => {
    console.log("Listenig port 4000");    
})
