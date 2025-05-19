import styles from "@/app/home.module.css";

export default function Services() {
    return(
        <>
            <div className={styles.skillsheader} data-aos="fade-up">
                <h3>Services</h3>
            </div>
            <main>
                <div className={styles.servicesbox}>
                    <div className={styles.service} data-aos="fade-up">
                        <h4>Frontend Development</h4>
                        <div className="progress">
                        <div className={`progress-bar progress-bar-striped progress-bar-animated 
                        ${styles.color}`} style={{width:`${90}%`}}></div>
                        </div>
                    </div>
                    <div className={styles.service} data-aos="fade-up">
                        <h4>Backend Development</h4>
                        <div className="progress">
                        <div className={`progress-bar progress-bar-striped progress-bar-animated 
                        ${styles.color}`} style={{width:`${70}%`}}></div>
                        </div>
                    </div>
                    <div className={styles.service} data-aos="fade-up">
                        <h4>Graphics Design</h4>
                        <div className="progress">
                        <div className={`progress-bar progress-bar-striped progress-bar-animated 
                        ${styles.color}`} style={{width:`${80}%`}}></div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}