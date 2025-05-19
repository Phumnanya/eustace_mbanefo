import Socials from "@/components/home components/Socials";
import Intro from "@/components/home components/Intro";
import SEO from "@/components/SEO";
import Skills from "@/components/home components/Skills";
import Projects from "@/components/home components/Projects";
import Services from "@/components/home components/Services";
import Education from "@/components/home components/Education";
import Experience from "@/components/home components/Experience";
import Certification from "@/components/home components/Certification";
import Footer from "@/components/home components/Footer";

export default function Home() {
    
    return(
        <>
        <SEO title="Portfolio Website of Eustace Mbanefo"
              description="talented Software Engineer open to web app development and software projects collaborations"
              />
        <Socials />
        <Intro />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <Experience />
        <Certification />
        <Footer />
        </>
    )
}