import React from 'react'

import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

const Hero = () => {
  return (
    <div>
     <section className={styles.container}> 
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Pavan Kodihalli Jagadeesh</h1>
            <p className={styles.description}>
            I am a Software Engineer with 5 years of experience in developing robust and scalable web applications using Java, Spring Boot, Angular and ReactJS. 
            I am actively seeking full-time opportunities as a Java Full Stack Developer. If you are looking for a dedicated professional to join your team, I'd love to connect.
            </p>
            <a href="mailto:pavankodihallijagadeesh@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div> 
        <img src ={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/> 
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />   
    </section> 
    </div>
  )
}

export default Hero
