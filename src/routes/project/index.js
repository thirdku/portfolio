import React ,{Component} from 'react';
import { render } from 'react-dom';
import style from './style.css';

const projectData = require('../../components/constants/project-data.json')
const aboutUs = require('../../components/constants/about-us.json')



export default class Project extends Component {

	// Note: `user` comes from the URL, courtesy of our router
	render({ project }) { const dad = [{project}];  const s = dad[0].project + ""; const d = parseInt(s);
		return (
			<div class={style.project}>
			  <p class={style.date}>
                {
                 projectData[d].date
                }
              </p>
		      <h1 class={style.head}>
		        {
		         projectData[d].title
		      	}
		      </h1>
		      <div class={style.content}>
		       <img class={style.img} src={projectData[d].images[1]} alt="cat"/>
		       <p>
		        {
		         projectData[d].paragraph
		       	}
		       </p>
		       
              </div>
              <div class={style.projects}>
	  <h3>Recent Projects</h3>
	  <ul>
	  <li class={style.li1}>
	  <a class={style.a1} href="/project/0">
	  <img class={style.img1}src={projectData[0].images[1]}/>
	  </a>
	  <a class={style.a}href="/project/0">
        {
         projectData[0].title
        }
      </a>
      <p class={style.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </li>
      <li class={style.li1}>
      <a class={style.a1}href="/project/1">
      <img class={style.img1}src={projectData[1].images[1]}/>
	  </a>
        <a class={style.a} href="/project/1">
        {
         projectData[1].title
        }
      </a>
      <p class={style.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </li>
      <li class={style.li1}>
      <a class={style.a1}href="/project/2">
      <img class={style.img1}src={projectData[2].images[1]}/>
	  </a>
      <a class={style.a} href="/project/2">
        {
         projectData[2].title
        }
      </a>
      <p class={style.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </li>
     </ul>
    </div>
	       </div>
		);
	}
}
render(<Project />, document.getElementById('root'))

