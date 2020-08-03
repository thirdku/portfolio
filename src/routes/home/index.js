import { h } from 'preact';
import style from './style';
import ccat from './ccat.jpg';
const Home = () => (
	<div class={style.home}>
	 <h1>Home</h1>
	 <div class={style.content}>
	  <p>
	   This is the Home component.
	  </p>
	  <img class={style.img} src={ccat} alt="cat"/>
	  <p>
	   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui dolor, dictum a feugiat a, luctus sed ante. Integer dui metus, accumsan sed urna nec, vulputate egestas leo. Nulla lacinia tincidunt ipsum vel sagittis. Vivamus eu enim justo. Cras imperdiet vitae diam nec maximus. Aenean justo orci, maximus volutpat nibh et, dapibus placerat tellus. Ut vehicula, mauris et accumsan volutpat, libero ligula interdum nulla, sed vehicula orci elit non magna. Nullam nunc lacus, rhoncus ut venenatis sodales, maximus in augue. Praesent quis congue dui. In sed ante mauris. Praesent imperdiet libero velit, non rutrum mauris suscipit et. 
	  </p>
	 </div>
	</div>
);

export default Home;
