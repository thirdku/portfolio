import { h, Component } from 'preact';
import style from './style.css';
const projectData = require('../../components/constants/project-data.json')


export default class Project extends Component {

	// Note: `user` comes from the URL, courtesy of our router
	render({ project }) { const dad = [{project}];  const s = dad[0].project + ""; const d = parseInt(s);
		return (
			<div class={style.project}>{console.log(projectData[d].images[1])}
			  <p class={style.date}>
                {
                 projectData[d].date
                }
              </p>
		      <h1>
		        {
		         project
		      	}
		      </h1>
		      <div class={style.content}>
		       <img src={projectData[d].images[1]} alt="cat"/>
		       <p>
		        {
		         projectData[d].paragraph
		       	}
		       </p>
              </div>
	       </div>
		);
	}
}
