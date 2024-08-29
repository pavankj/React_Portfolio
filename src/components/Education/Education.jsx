import React from 'react'

import styles from "./Education.module.css"
import { getImageUrl } from '../../utils'

const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
      
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("education/IllinoisTech.png")} alt="College icon" className={styles.heroImg}/>
            <div className={styles.aboutItemText}>
                <h3>Illinois Institue Of Technology, Chicago, USA</h3>
                <p>Masters in Computer Science | Aug 2022 - May 2024</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("education/vtu.png")} alt="College icon" className={styles.heroImg}/> 
            <div className={styles.aboutItemText}>
                <h3>Visvesvaraya Technological University, KA, IND</h3>
                <p>Bachelor of Engineering in Electronics & Communication | Aug 2015 - Jul 2019</p>
            </div>
        </li>
        </ul>
      </div>
    </section>
  )
}

export default Education
