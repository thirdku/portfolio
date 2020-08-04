import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
const projectData = require('../constants/project-data.json')
const aboutUs = require('../constants/about-us.json')
const Header = () => (
	
	<header class={style.header}>
     <div class={style.div1}>
      <div>
	      <Link href="/">
	       <h1 class={style.h1}>
	        ShepherdLabs
	       </h1>
	      </Link>
	   <div>
	    <p class={style.p}> 
    	  I'm a young entrepreneur & Full-stack Developer from USA. You can find me on 
    	<p>
	     <a  href="https://twitter.com/lukaszmtw" target="_blank">
	      Twitter
	     </a> • <a href="https://instagram.com/tookbyluke" target="_blank">
	       Instagram
	     </a> • <a href="https://github.com/FeiShepherd" target="_blank">
	       GitHub
	     </a>
	    </p>
        </p>
       </div>
     <nav class={style.nav}>
      <input type="checkbox" id="menu-check" class={style.input1}></input>
      <label id="label-check" for="menu-check"class={style.label}>
       <span class={style.close}>✕</span>
       <span class={style.open}>☰</span>
      </label>
      <ul class={style.ul}>
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
           <Link href="/aboutus/0">
           {
            aboutUs[0].title
           }
           </Link>
          </li>
         </ul>
         <ul class={style.ul1}>
          <li>
           <Link href="/aboutus/1">
           {
            aboutUs[1].title
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
           <Link href="/contact">
           Contact
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
