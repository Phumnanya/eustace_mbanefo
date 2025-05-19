import styles from "@/app/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <footer data-aos="fade-up">
                <div className={styles.base}>
                    <img src="purple.jpg" alt="eustace mbanefo" />
                </div>
                <div className={styles.base}>
                    <h3>Interested in hiring me for your project?</h3>
                </div>
                <div className={styles.base}>
                    <p>looking for a skilled full-stack developer to build your web app or ship your
                    software product? To contact me just drop me an email on 
                    <a href="mailto:eustace364@gmail.com"> eustace364@gmail.com</a> or click the hire me 
                    button above.</p>
                </div>
                <div className={styles.base}>
                    <button type="button" className={styles.basemediaLinks}>
                    <a href="https://www.linkedin.com/in/eustace-m-823865b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className={styles.faSocials} /></a>
                    </button>
                    <button type="button" className={styles.basemediaLinks}>
                    <a href="https://x.com/PhumiClyde?t=9Rm_q0SVp0ysp64oMuGLHw&s=09"><FontAwesomeIcon icon={faXTwitter} size="2x" className={styles.faSocials} /></a>
                    </button>
                    <button type="button" className={styles.basemediaLinks}>
                    <a href="https//github.com/Phumnanya"><FontAwesomeIcon icon={faGithub} size="2x" className={styles.faSocials} /></a>
                    </button>
                    <button type="button" className={styles.basemediaLinks}>
                        <a href="https://www.facebook.com/profile.php?id=100007975694965">
                        <FontAwesomeIcon icon={faFacebookF} size="2x" className={styles.faSocials} /></a>
                    </button>
                </div>
                <h5 className={styles.copyright}>&copy; Eustace Mbanefo 2025</h5>
            </footer>
        </>
    )
}

