import styles from "@/app/home.module.css";

export default function Education() {
    return(
        <>
            <div className={styles.skillsheader} data-aos="fade-up">
                <h3>Education</h3>
            </div>
            <h4 className={styles.school} data-aos="fade-up">Alex Ekwueme Federal University, Ebonyi, Nigeria</h4>
            <div className={styles.year} data-aos="fade-up">
                <h5>B.Sc. Criminology & Security studies.</h5>
                <h5>2018 - 2022</h5>
            </div>
        </>
    )
}