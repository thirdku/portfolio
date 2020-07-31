import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<div class={style.div1}>
		<div>
		<h1 class={style.h1}> Shepherd Labs</h1>
		<p class={style.p}> I'm a young entrepreneur & Full-stack Developer from USA. 
		You can find me on <a  href="https://twitter.com/lukaszmtw" target="_blank">Twitter</a>, 
		<a href="https://instagram.com/tookbyluke" target="_blank">Instagram</a> <a href="https://producthunt.com/@lukaszmtw" target="_blank">Product Hunt</a>.
</p>
<nav>

<ul>
<li>

<h6 class={style.h6}>projects</h6>

<ul class={style.ul1}><li><Link href="/zome">profiledd</Link></li><li><Link href="/jobb">jobb</Link></li></ul>

</li>
<li>

<h6 class={style.h6}>projects</h6>

<ul class={style.ul1}><li><Link href="/zome">profiledd</Link></li><li><Link href="/jobb">jobb</Link></li></ul>

</li>
<li>

<h6 class={style.h6}>projects</h6>

<ul><li><Link href="/zome">profiledd</Link></li><li><Link href="/jobb">jobb</Link></li></ul>

</li>
</ul>

</nav>
</div>
		</div>
		
	</header>
);

export default Header;
