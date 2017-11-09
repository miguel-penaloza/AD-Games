// let's go!
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router'
import App from './components/App';
import Login from './components/Login';
import NotFound from './components/NotFound';

const Root = () => {
    return <BrowserRouter>
        <div>
            <Match exactly pattern="/login" component={Login}></Match>
            <Match exactly pattern="/" component={App}></Match>
            <Match exactly pattern="/app/:appId" component={App}></Match>
            <Miss component={NotFound}></Miss>
        </div>
    </BrowserRouter>
}

render(<Root/>, document.querySelector('#main'));
