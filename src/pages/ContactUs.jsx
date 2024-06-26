import React, { useRef } from 'react';
import PropTypes from "prop-types";

import styles from "./ContactUs.module.css";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const ContactUs = ({ className = "" }) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Thank you for raeching out!",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          // console.log('FAILED...', error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Try again later.",
          });
        },
      );
  };

  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.main}>
        <div className={styles.contactInfoParent}>
          <div className={styles.contactInfo}>
            <h1 className={styles.contactUs}>Contact me</h1>
            <h3 className={styles.imHereTo}>I'm Here to Help</h3>
          </div>
          <form className={styles.form} ref={form} onSubmit={sendEmail}>
            {/* <Input firstName="First name" labelPlaceholder="Jane" />
            <Input
              firstName="Last name"
              labelPlaceholder="Smitherton"
              propWidth="18.563em"
              propMinWidth="9.938em"
            />
            <Input
              firstName="Email address"
              labelPlaceholder="email@janesfakedomain.net"
              propWidth="39.125em"
              propMinWidth="15.625em"
            /> */}

            <div className={styles.input2}>
              <div className={styles.firstName2}>First Name</div>
              <div className={styles.field2}>
                <input
                  required 
                  name="first_name"
                  className={styles.label2}
                  placeholder="Jane"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.input2}>
              <div className={styles.firstName2}>Last name</div>
              <div className={styles.field2}>
                <input
                  required 
                  name="last_name"
                  className={styles.label2}
                  placeholder="Smitherton"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.input2}>
              <div className={styles.firstName2}>Email address</div>
              <div className={styles.field1}     
              >
                <input
                  required 
                  name="email_id"
                  className={styles.label2}
                  placeholder="email@janesfakedomain.net"
                  type="email"
                />
              </div>
            </div>

            <div className={styles.input}>
              <div className={styles.yourMessage}>Your message</div>
              <textarea
                required 
                name="message"
                className={styles.field}
                placeholder="Enter your question or message"
               
              />
            </div>
            <button className={styles.button} type='submit'>
              <div className={styles.submit}>Submit</div>
            </button>
          </form>
        </div>
        <img
          className={styles.heroImageIcon}
          loading="lazy"
          alt=""
          src="/contact-me.jpg"
        />
      </div>
    </section>
  );
};

ContactUs.propTypes = {
  className: PropTypes.string,
};

export default ContactUs;
