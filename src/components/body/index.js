import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Body = () => (
	<div class={style.body}>
		<div class={style.div1}>
       <h2 class={style.heading}>I build things:</h2>
       <ul>
       <il><a  href="https://twitter.com/lukaszmtw" target="_blank">Cleanshot</a> - macOS app for improved screen capturing.</il>
       </ul>
       
		</div> 
		
	</div>
);
export default Body;