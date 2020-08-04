import { h } from 'preact';
import style from './style.css';

const Contact = () =>(
     <div class={style.contact}>
      <form action class={style.form}>
       <h3 class={style.h3}>
       Contact
       </h3>
       <p class={style.p}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
       </p>
       <label class={style.label}>
        <input type="text" class={style.text} required>
        </input>
        <span>Your Name</span>
        <span class={style.border}></span>
       </label>
       <label class={style.label}>
        <input type="text" class={style.text} required>
        </input>
        <span>Your Mail</span>
        <span class={style.border}></span>
       </label>
       <label class={style.label}>
        <input type="text" class={style.text} required>
        </input>
        <span>Your Message</span>
        <span class={style.border}></span>
       </label>
       <label class={style.label}>
        <input type="text" class={style.text} required>
        </input>
        <span>Your Phone Number</span>
        <span class={style.border}></span>
       </label>
       <button class={style.button}>
        Submit
       </button>
      </form>
     </div>
    );
    export default Contact;