import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import linkedin from './Linkedin1.png'
import github from './GitHub2.png'
import email from './Email2.png'
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
	   <div class={style.paragraph}>
	    <p class={style.p}> 
    	  I'm a young entrepreneur & Full-stack Developer from USA. You can find me on
    	  </p>
    	  <ul class={style.ul3}>
       <li>
       <ul class={style.ul1}>
        <li>  
        <a class={style.social}  href="https://www.linkedin.com/in/thomas-shepherd-00a6a0183/?originalSubdomain=th" target="_blank">
        <img class={style.icon} src={linkedin} />
	        
	         Linkedin
	        </a>
	       </li>
       </ul>
	      <ul class={style.ul1}>
        <li>
        <a class={style.social} href="https://github.com/FeiShepherd" target="_blank">
        <img class={style.icon} src={github} />
	        
	         GitHub
	        </a>
	       </li>
       </ul>
	      <ul class={style.ul1}>
        <li>
        <a class={style.social} href="mailto:sakulwongs@gmail.com" target="_blank">
        <img class={style.icon} src={email} />
	        
	         Email
	        </a>
	       </li>
       </ul>
      </li>
      </ul>
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
         work
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
         </h6>
         <ul class={style.ul1}>
          <li>
           <Link href="/contact">
           Contact Us
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
