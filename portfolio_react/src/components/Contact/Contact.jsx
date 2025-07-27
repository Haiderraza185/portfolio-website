import React from 'react'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"contact/emailIcon.png"} alt="Email icon" />
          <a href="razakhokher269@gmail.com">razakhokher269@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={"contact/linkedinIcon.png"} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/haider-raza-49a94a370/" target='_main'>LinkedIn</a>
        </li>

        <li className={styles.link}>
          <img src={"contact/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/Haiderraza185" target='_main'>Github</a>
        </li>
    </ul>
  </footer>
  )
}

export default Contact;
