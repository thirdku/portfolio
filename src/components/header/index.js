import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
const projectData = require('../constants/project-data.json')
const Header = () => (
	
	<header class={style.header}>
     <div class={style.div1}>
      <div>
	   <h1 class={style.h1}> 
	    <Link href="/">
	     ShepherdLabs
	    </Link>
	   </h1>
	   <p class={style.p}> 
    	 I'm a young entrepreneur & Full-stack Developer from USA. You can find me on 
	    <a  href="https://twitter.com/lukaszmtw" target="_blank">
	     Twitter
	    </a>/
	    <a href="https://instagram.com/tookbyluke" target="_blank">
	     Instagram
	    </a>/
	    <a href="https://github.com/FeiShepherd" target="_blank">
	     GitHub
	    </a>
       </p>
     <nav>
      <ul>
       <li>
        <h6 class={style.h6}>
         projects
        </h6>
        <ul class={style.ul1}>
         <li>
          <Link href="/project/0">
          {
           projectData[0].title
          }
          </Link>
         </li>
        </ul>
        <ul class={style.ul1}>
         <li>
          <Link href="/project/1">
          {
           projectData[1].title
          }
          </Link>
         </li>
        </ul>
        <ul class={style.ul1}>
         <li>
          <Link href="/project/2">
          {
           projectData[2].title
          }
          </Link>
         </li>
        </ul>
        </li>
        <li>
         <h6 class={style.h6}>
          About us
         </h6>
         <ul class={style.ul1}>
          <li>
           <Link href="/project/0">
           {
            projectData[0].title
           }
           </Link>
          </li>
         </ul>
        </li>
        <li>
         <h6 class={style.h6}>
          Work
         </h6>
         <ul class={style.ul1}>
          <li>
           <Link href="/project/0">
           {
            projectData[0].title
           }
           </Link>
          </li>
         </ul>
         </li>
        </ul>
       </nav>
      </div>
     </div>
    </header>
);

export default Header;
