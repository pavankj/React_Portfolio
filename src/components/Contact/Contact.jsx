import React from 'react'

import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
   <footer id="contact" className={styles.container}>
     <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
     </div>
     <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:pavankj22121997@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <a href="http://www.linkedin.com/in/pavan-kodihalli-jagadeesh-31a09a15a">LinkedIn</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/pavankj/">GitHub</a>
        </li>
     </ul>
   </footer>
  )
}

export default Contact
