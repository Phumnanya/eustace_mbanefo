'use client';
import styles from "@/app/home.module.css";
import dynamic from "next/dynamic";

const Splidecarousel = dynamic(() =>
import('@/components/Splidecarousel'),
{
    ssr: false,
});

export default function Projects() {
    return(
        <>
        <div className={styles.skillsheader} data-aos="fade-up">
                <h3>Projects</h3>
            </div>
        <Splidecarousel />
        </>
    )
}