import { h, Component } from 'preact';
import { Router } from 'preact-router';
import style from './style.css'
import Header from './header';
import Body from './body';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Project from '../routes/project';

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
					<Project path="/project/:project" />
			</Router>
			</div>
		);
	}
}
