import styles from "@/app/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Socials() {
    return(
        <>
        <header>
        <nav>
        <div className={styles.socials}>
        <button type="button" className={styles.mediaLinks}>
        <a href="https://www.linkedin.com/in/eustace-m-823865b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className={styles.faSocials} /></a>
        </button>
        <button type="button" className={styles.mediaLinks}>
        <a href="https://x.com/PhumiClyde?t=9Rm_q0SVp0ysp64oMuGLHw&s=09"><FontAwesomeIcon icon={faXTwitter} size="2x" className={styles.faSocials} /></a>
        </button>
        <button type="button" className={styles.mediaLinks}>
        <a href="https//github.com/Phumnanya"><FontAwesomeIcon icon={faGithub} size="2x" className={styles.faSocials} /></a>
        </button>
        <button type="button" className={styles.mediaLinks}>
            <a href="https://www.facebook.com/profile.php?id=100007975694965">
            <FontAwesomeIcon icon={faFacebookF} size="2x" className={styles.faSocials} /></a>
        </button>
        </div>
{/* second flex item*/}
        <button type="button" className={styles.bar}>
        <FontAwesomeIcon icon={faBars} size="2x" className={styles.faBar} />
        </button>
        </nav>
        </header>
        </>
    )
}