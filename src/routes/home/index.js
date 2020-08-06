import { h, Component, render } from 'preact';
import style from './style.css';
import ccat from '../../components/constants/ccat.jpg'
import wojak from '../../components/constants/wojak.jpg'
import wojak2 from '../../components/constants/wojak2.png'
import wojak3 from '../../components/constants/wojak3.jpg'
const projectData = require('../../components/constants/project-data.json')

const Home = () => (
	<div class={style.home}>
	 <h1 class={style.head}>
	  Home
	 </h1>
	 <div class={style.content}>
	
	  <p>
	   This is the Home component.
	  </p>
	  
	  <p>
	   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui dolor, dictum a feugiat a, luctus sed ante. Integer dui metus, accumsan sed urna nec, vulputate egestas leo. Nulla lacinia tincidunt ipsum vel sagittis. Vivamus eu enim justo. Cras imperdiet vitae diam nec maximus. Aenean justo orci, maximus volutpat nibh et, dapibus placerat tellus. Ut vehicula, mauris et accumsan volutpat, libero ligula interdum nulla, sed vehicula orci elit non magna. Nullam nunc lacus, rhoncus ut venenatis sodales, maximus in augue. Praesent quis congue dui. In sed ante mauris. Praesent imperdiet libero velit, non rutrum mauris suscipit et. 
	  </p>
	  
	 </div>
	 <div class={style.projects}>
	  <h3>Recent Projects</h3>
	  <ul>
	  <li class={style.li1}>
	  <a class={style.a1} href="/project/0">
	  <img class={style.img}src={projectData[0].images[1]}/>
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
      <img class={style.img}src={projectData[1].images[1]}/>
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
      <img class={style.img}src={projectData[2].images[1]}/>
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

export default Home;
