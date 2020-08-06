import React ,{Component} from 'react'
import { Router } from 'preact-router';
import style from './style.css'
import Header from './header';
import Body from './body';


// Code-splitting is automated for routes
import Home from '../routes/home';
import Project from '../routes/project';
import About from '../routes/about';
import Contact from '../routes/contact';

export default class App extends Component {
	

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app" class={style.app}>
			 <Header/>
			 <Router onChange={this.handleRoute}>
			  <Home path="/" />
			   <Project path="/project/:project" />
			   <Contact path="/contact" />
			 </Router>
			</div>
		);
	}
}
