import { h, Component } from 'preact';
import style from './style.css';
const projectData = require('../../components/constants/project-data.json')


export default class Project extends Component {
state = {
		time: Date.now(),
		count: 10
	};
	
	// Note: `user` comes from the URL, courtesy of our router
	render({ project }) { const dad = [{project}];  const s = dad[0].project + ""; const d = parseInt(s);
		return (
			<div class={style.project}>
		<h1>{project}</h1>
		<div class={style.content}>{console.log(d,1)}
		<p>This is the Home component.{project}{projectData[d].paragraph}
</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui dolor, dictum a feugiat a, luctus sed ante. Integer dui metus, accumsan sed urna nec, vulputate egestas leo. Nulla lacinia tincidunt ipsum vel sagittis. Vivamus eu enim justo. Cras imperdiet vitae diam nec maximus. Aenean justo orci, maximus volutpat nibh et, dapibus placerat tellus. Ut vehicula, mauris et accumsan volutpat, libero ligula interdum nulla, sed vehicula orci elit non magna. Nullam nunc lacus, rhoncus ut venenatis sodales, maximus in augue. Praesent quis congue dui. In sed ante mauris. Praesent imperdiet libero velit, non rutrum mauris suscipit et. </p>
	</div></div>
		);
	}
}
