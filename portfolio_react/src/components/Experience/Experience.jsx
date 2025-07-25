import React from 'react'
import styles from "./Experience.module.css"
import skills from "../../data/skills.json"

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content} >
        <div className={styles.skills}>{
            skills.map((skills,id)=>{
                return(
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={skills.imageSrc} alt={skills.title} />
                        </div>
                        <p>{skills.title}</p>
                    </div>
                )
            })
            }
        </div>
        
    </div>
  </section>
  )
}

export default Experience;