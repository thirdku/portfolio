import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Body from './body';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {
	

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
			<Header/>
			<Body/>
			</div>
		);
	}
}
