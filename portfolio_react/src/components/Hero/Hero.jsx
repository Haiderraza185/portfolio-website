import styles from "./Hero.module.css";
const Hero = () =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey I'm Haider</h1>
            <p className={styles.description}>
                I'm a full-stack developer with 5 years of experience using React and NodeJS.Reach out if you'd like to learn more!
            </p>
            <a href="razakhokher269@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
            <img src={("hero/heroImage.png")} alt="Hero image of me" className={styles.heroimg} />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    </section>
}

export default Hero;