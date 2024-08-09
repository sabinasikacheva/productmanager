import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions or want to work together, feel free to reach out.</p>
      <form action="submit_form.php" method="post">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
