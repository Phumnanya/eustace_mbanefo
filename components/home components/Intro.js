import styles from "@/app/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
    return(
        <>
            <section>
                <div className={styles.introduction}>
                    <h1>Eustace Mbanefo</h1>
                    <h2>Software Engineer</h2>
                    <br></br>
                    <h5>Hello! I'm a full-stack engineer specialized in developing responsive, and scalable
                    web applications and software for businesses, schools, organizations, and any other institutions.
                    </h5>
                    <button type="button" className={styles.hire}>
                    <a href="mailto:eustace364@gmail.com" >
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className={styles.faResume} /> Hire me</a>
                    </button>
                    <button type="button" className={styles.resume}>
                    <a href="/Eustace Resume.pdf" download>
                    <FontAwesomeIcon icon={faFileLines} size="2x" className={styles.faResume} /> Resume</a>
                    </button>
                </div>
                <div className={styles.introduction}><img src="purple.jpg" alt="Dev Eustace" /></div>
            </section>
        </>
    )
}