import React from "react"
import styles from  "./About.module.css"

const About = () =>{
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={"about/aboutImage.png"} alt="" />
         <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={"about/cursorIcon.png"} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experiences in building responsive and optimized sites </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={"about/uiIcon.png"} alt="Server icon" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have designed multiple landing pages and have created design systems as well </p>
                </div>
            </li>
            
         </ul>
        </div>
    </section>
}

export default About;