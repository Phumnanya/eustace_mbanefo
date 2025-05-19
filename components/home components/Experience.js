import styles from "@/app/home.module.css";

export default function Experience() {
    return(
        <>
            <div className={styles.skillsheader} data-aos="fade-up">
                <h3>Experience</h3>
            </div>

            <div className={styles.experience}>
                <div className={styles.role} data-aos="fade-up">
                    <h4>Software Engineering Training - ALX Africa</h4>
                    <h5>August 2022 - January 2024</h5>
                    <p> Trained and collaborated on real-world projects using industry-standard tools, sharpened
                    full-stack development skills, and contributed to scalable solutions in a high-impact
                    tech environment.</p>
                </div>
                <br></br>
                <div className={styles.role} data-aos="fade-up">
                    <h4>Frontend Developer intern - Flexisaf Edusoft limited</h4>
                    <h5>May 2025 - August 2025</h5>
                    <p>Collaborated on real-world projects with senior professional developers, sharpened my
                    frontend development skills, and contributed to scalable solutions in a highly rated
                    e-learning tech company.</p>
                </div>
            </div>
        </>
    )
}