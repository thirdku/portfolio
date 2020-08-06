import { h , Component ,render} from 'preact';
import style from './style.css';
import emailjs from 'emailjs-com';

export default class Contact extends Component {
constructor(props) {
    super(props);
this.state = {
      name: "",
      email: "",
      phone: "",
      message:"",
      text:"SUBMIT",
    };
    
  }
  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
this.setState({ [name]: value });
  }
  sendMessage(event) {
    event.preventDefault();
   
   const templateParams = {
      from_name: this.state.name + " (" + this.state.email + ")",
      to_name: 'sakulwongs@gmail.com',
      phone: this.state.phone,
      message: this.state.message
    };
    emailjs.send("sakulwongs@gmail.com", "contact_shepherd", templateParams,"user_YVnTIx5X1nrbfmdBwQSE6")
      .then(
        function(response) {
          response.success()
          console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
          console.log("Your message was not able to be sent",error);
        }
        
      );
      this.setState({
      name: "",
      email: "",
      phone: "",
      message:"",
      text:"SENT"
    });
  }
  
	// Note: `user` comes from the URL, courtesy of our router
	render() { const { text } = this.state //destucture state
		return (
     <div class={style.contact}>
     <div class={style.background}>
      <form action class={style.form}>
       <h3 class={style.h3}>
       Contact Us
       </h3>
       <p class={style.p}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
       </p>
       <label class={style.label}>
        <input type="text" 
        class={style.text} 
        required 
        name="name"
        onChange={this.handleInputChange.bind(this)}
        value={this.state.name}>
        </input>
        <span>Your Name</span>
        <span class={style.border}></span>
       </label>
       <label class={style.label}>
        <input 
        type="text" 
        class={style.text} 
        required 
        name="email"
        onChange={this.handleInputChange.bind(this)}
        value={this.state.email}
        >
        </input>
        <span>Your Mail</span>
        <span class={style.border}></span>
       </label>
       <label class={style.label}>
        <input 
        type="text" 
        class={style.text} 
        required 
        name="phone"
        onChange={this.handleInputChange.bind(this)}
        value={this.state.phone}>
        </input>
        <span>Your Phone Number</span>
        <span class={style.border}></span>
       </label>
       <label class={style.label}>
        <textarea 
        type="text" 
        class={style.textarea} 
        required 
        name="message"
        onChange={this.handleInputChange.bind(this)}
        value={this.state.message}>
        </textarea>
        <span>Your Message</span>
        <span class={style.border}></span>
       </label>
       <button class={style.button}
       onClick={this.sendMessage.bind(this)}
       >
        {text}
       </button>
      </form>
      </div>
     </div>
    )}};
