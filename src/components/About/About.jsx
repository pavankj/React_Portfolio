import React from 'react'

import styles from "./About.module.css"
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Java Full Stack logo" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I specialize in building responsive and dynamic web applications using modern frameworks like ReactJS and Angular, ensuring seamless user experiences and optimized performance</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I develop scalable and efficient back-end systems using Java, Spring Boot, and Hibernate, with expertise in creating RESTful APIs and integrating databases like MySQL and MongoDB</p>
            </div>
        </li>
        </ul>
      </div>
    </section>
  )
}

export default About
