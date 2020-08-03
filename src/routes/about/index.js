import { h, Component } from 'preact';
import style from './style.css';
const aboutUs = require('../../components/constants/about-us.json')


export default class aboutus extends Component {

	// Note: `user` comes from the URL, courtesy of our router
	render({ aboutus }) { const dad = [{aboutus}];  const s = dad[0].aboutus + ""; const d = parseInt(s);
		return (
			<div class={style.about}>{console.log(aboutUs[d].images[1])}
		      <h1>
		       <a href={aboutUs[d].link} target="_blank">
		        {
		         aboutUs[d].name
		      	}
		      	</a>
		      </h1>
		      <p class={style.title}>
		       {
		        aboutUs[d].title
		       }
		      </p>
		      <div class={style.content}>
		       <img class={style.img} src={aboutUs[d].images[0]} alt="cat"/>
		       <p>
		        {
		         aboutUs[d].paragraph
		       	}
		       </p>
              </div>
	       </div>
		);
	}
}
