import './Contact.css'
import contactImage from '../../img/contact-image.jpg'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dddxcwm', 'template_ody61ix', form.current, 'QGr4V0j_zb2yP1rn7')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <div className='work-hours'>Part1</div>
      <div className='contact-form'>
        <h2>ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΟΥ</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            <span className={name === "" ? "" : "move-span-up"}>Ονοματεπώνυμο:</span>
            <input
              type="text"
              name="name"
              required
              onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span className={number === "" ? "" : "move-span-up"}>Τηλέφωνο:</span>
            <input
              type="text"
              name="number"
              required
              onChange={(e) => setNumber(e.target.value)} />
          </label>
          <label>
            <span className={email === "" ? "" : "move-span-up"}>Email:</span>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <span className={age === "" ? "" : "move-span-up"}>Ηλικία:</span>
            <input
              name="age"
              type="text"
              required
              onChange={(e) => setAge(e.target.value)} />
          </label>
          <textarea className='form-text-area' name='message' placeholder='Περιγράψτε την ασθένεια σας...'></textarea>
          <button className='contact-button'>ΑΠΟΣΤΟΛΗ</button>
        </form>
      </div>
      <div className='contact-image'></div>
    </div>
  )
}
