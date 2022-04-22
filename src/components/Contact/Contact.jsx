import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_507cgvs', 'template_uzn62pu', form.current, 'wXjsro9P3s0AaWUBn')
      
      e.target.reset()
     
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>benjaminokumu12@gmail.com</h5>
            <a href="mailto:benjaminokumu12@gmail.com" target="_blank">Send Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Benjamin Okumu</h5>
            <a href="https://m.me/benjamin.okinyi.5" target="_blank">Send Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Email</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone+254704479392" target="_blank">Send Message</a>
          </article>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit'className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>

    </section>
  )
}

export default Contact