import styles from "@/app/home.module.css";

export default function Skills() {
    return(
        <>
            <div className={styles.skillsheader} data-aos="fade-up">
                <h3>Skills</h3>
            </div>
            <p className={styles.skillsintro} data-aos="fade-up">I have valuable experience in building responsive User interface
             functional and scalable backend systems for any field or institution. Below is a quick overview 
             of my main technical skill sets and technologies I am well versed on.</p>
{/* second flex item <img src="icons8-2.png" alt="skills icon" className={styles.skillsimage} />*/}
            <div className={styles.skillsbox} data-aos="fade-up">
                <div className={styles.skills}>
                    <img src="html5.png" alt="html icon" />
                    <h4>HTML</h4>
                </div>
                <div className={styles.skills}>
                    <img src="css.png" alt="css icon" />
                    <h4>CSS</h4>
                </div>
                <div className={styles.skills}>
                    <img src="bootstrap.png" alt="bootstrap icon" />
                    <h4>Bootstrap</h4>
                </div>
                <div className={styles.skills}>
                    <img src="javascript.png" alt="javascript icon" />
                    <h4>Javascript</h4>
                </div>
                <div className={styles.skills}>
                    <img src="react.png" alt="react icon" />
                    <h4>React.js</h4>
                </div>
                <div className={styles.skills}>
                    <img src="icons8-next.js.png" alt="nextjs icon" />
                    <h4>Next.js</h4>
                </div>
                <div className={styles.skills}>
                    <img src="python.png" alt="python icon" />
                    <h4>Python & Flask</h4>
                </div>
            </div>
        </>
    )
}