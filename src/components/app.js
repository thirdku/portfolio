import { h, Component } from 'preact';
import { Router } from 'preact-router';
import style from './style.css'
import Header from './header';
import Body from './body';

// Code-splitting is automated for routes
import Home from '../routes/home';

export default class App extends Component {
	

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app" class={style.app}>
			<Header/>
			<Router onChange={this.handleRoute}>
					<Home path="/zome" />
				</Router>
			</div>
		);
	}
}
