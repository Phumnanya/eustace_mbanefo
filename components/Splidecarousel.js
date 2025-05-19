'use client';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import styles from '@/app/home.module.css';

export default function Splidecarousel() {
    return(
        <Splide
        options = {{
            type: 'loop',
            perPage: 3,
            gap: '1rem',
            autoplay: true,
            pauseOnHover: true,
            breakpoints: {
                800: {
                    perPage: 1,
                }
            }
        }}
        aria-label = "My Projects"
        >
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://learnexa.netlify.app">
                    <img src="Learnexa.png" alt="learnexa" />
                    <br></br>
                    <h4>Learnexa</h4>
                    <p>A design of an e-learning platform with a login/sign up page and a user dashboard.
                     Built with html5, CSS, javascript, Python and flask framework.</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://solarscript-nextjs.vercel.app">
                    <img src="solarscript.png" alt="solar site" />
                    <br></br>
                    <h4>Solarscript</h4>
                    <p>4 page design of a solar, electrical and air conditioner installation company.
                     Built with react, bootstrap and Next.js and hosted on vercel</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://weather-app-two-kappa-68.vercel.app">
                    <img src="weather app p1.png" alt="weather app" />
                    <br></br>
                    <h4>Weather App</h4>
                    <p>A functional weather app with integration of openweather api for realtime weather 
                    updates. Built with React</p>
                    </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://pureluxe.netlify.app">
                    <img src="Pureluxe.png" alt="pureluxe web" />
                    <br></br>
                    <h4>Pureluxe</h4>
                    <p>single page User interface design of a body care and cosmetics products website.
                     Built with html5, CSS, bootstrap, and javascript</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://rakuten-two.vercel.app">
                    <img src="rakuten.png" alt="rakuten" />
                    <br></br>
                    <h4>Rakuten</h4>
                    <p>Redesign and replication of the home page of the official website of Rakuten stores.
                     Built with html5, CSS, and bootstrap</p>
                     </a>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className={styles.project}>
                <a href="https://eustacequizapp.netlify.app">
                    <img src="Quiz.png" alt="quiz app" />
                    <br></br>
                    <h4>Quiz app</h4>
                    <p>single page quiz app with questions and options and score assessment at the end of it.
                     built with simple html5, CSS, and javascript.</p>
                     </a>
                </div>
            </SplideSlide>
        </Splide>
    );
}