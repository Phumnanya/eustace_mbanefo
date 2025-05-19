import styles from "@/app/home.module.css";

export default function Certification() {
    return(
        <>
            <div className={styles.skillsheader} data-aos="fade-up">
                <h3>Certification</h3>
            </div>
            <div className={styles.year} data-aos="fade-up">
                <a target="-blank" href="certificate-eustace-mbanefo.png">
                <figure>
                    <img src="certificate-eustace-mbanefo.png" alt="certificate" />
                </figure>
                </a>
                <h5>Software Engineering Certificate</h5>
            </div>
        </>
    )
}