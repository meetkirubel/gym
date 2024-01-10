"use client";
import React , { useRef,useState }  from 'react'
import "@style/about.css"
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaLocationDot } from 'react-icons/fa'
import { MdLocationPin,MdEmail,MdPhone} from 'react-icons/md'
import emailjs from '@emailjs/browser';




  const Sent = ({setSent})=>{
    return (<h4 className='btn bg-green-500 hover:bg-green-300 font-bold py-1 px-1 rounded' onClick={()=>{setSent(false)}}>Message Sent</h4>
  )
  }
export default function Contact(){
  const form = useRef();
  const [sent,setSent] = useState(false);



  const sendEmail = (e) => {


    e.preventDefault();

    emailjs.sendForm('service_76dowag', 'template_x0sd5ti', form.current, 'jyIm4x5V6r1mVoO45')
      .then((result) => {
          console.log(result.text);
          setSent(true)
      }, (error) => {
          console.log(error.text);
      });
      
  };

    return (
      <div>
        <div className="contact__hero">

        <div className="h1__container">
        <div className="title__header__center Contact">
                <span className="top">GET MORE INFO</span>
                <h1>Contact Us</h1>
              </div>
              </div>
              
        </div>  
        
        
        <div className="container container__flex contact-info">

          <div className="left">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15762.614134366087!2d38.8200765!3d9.0039926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b3e9b362b11%3A0x13b35ec6fa60117a!2sPOWER%20GYM%20ADDIS!5e0!3m2!1sen!2set!4v1695633226442!5m2!1sen!2set" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="right">

          <form ref={form}  onSubmit={sendEmail} >
          <h2>Let's Talk</h2>
             <input type="text" name="from" value='Power Gym Addis' hidden />


          <div className='input__container'>
           <h6>Name</h6>
           <input type="text" name="name" placeholder="Your Name" 
            required/>
            </div>
          <div className='input__container'>
           <h6>Email</h6>
      <input type="email" name="email" placeholder="Your Email"  required/>
            </div>

          <div className='input__container'>
           <h6>Phone Number</h6>
      <input type="phone" name="phone" placeholder="Your Phone Number" required />
           
            </div>
          <div className='input__container'>
           <h6>Message</h6>
            <textarea name="message" placeholder="Your Message"  required/>
            </div>
            
            <button type="submit" className='btn bg-yellow-500 hover:bg-yellow-300 font-bold py-2 px-4 rounded'>Submit</button>
            {sent?<Sent setSent={setSent}/>:""}
          </form>
          <div className="social__link">
            <a href="https://www.instagram.com/powergym_addis/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>

            <a href="https://www.facebook.com/powergymaddis/" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>

            <a href="https://www.youtube.com/@PowerGymAddis" target="_blank" rel="noopener noreferrer"><FaYoutube/></a>

            <a href="https://t.me/powergymdave" target="_blank" rel="noopener noreferrer"><FaTelegramPlane/></a>
        </div>
          </div>
         

        </div>
        <div className="contacts container">
                <ul>
                    <li><span className="icon"><MdLocationPin className="icon"/></span> <span>Jacros, Salite mehret street EBM building, 1st Floor, Addis</span></li>
                    <li><span className="icon"><MdEmail className="icon"/></span> <span><a href="mailto:gym@powerentertainmentaddis.com" target="_blank" rel="noopener noreferrer">gym@powerentertainmentaddis.com</a></span></li>
                    <li><span className="icon"><MdPhone className="icon"/></span> <span><a href="tel:+251902080808" target="_blank" rel="noopener noreferrer">+2519 02 08 08 08</a></span></li>
                </ul>
        </div>

      </div>
    );
}

