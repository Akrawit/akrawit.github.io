import styles from "../../styles/Experience.module.css"
import Slide from 'react-reveal/Slide';
import ExperienceCard from "./experienceCard";

export default function Experience() {
  return (
    <section className={styles.second}>
      <Slide left>
        <div>
          <h2> Experience </h2>
          <ul className={styles.experiencelist}>
            <ExperienceCard
              title="Senior Software Engineer"
              period="2017 - present"
              company="Agoda Services"
              url="https://www.linkedin.com/company/agoda"
              imageSource="/agoda.png"
              alt="agoda-logo"
            />
            <ExperienceCard
              title="Full Stack Developer"
              period="2015 - 2017"
              company="Wongnai Media"
              url="https://www.linkedin.com/company/wongnai.com/"
              imageSource="/wongnai.png"
              alt="wongnai-logo"
            />
            <ExperienceCard
              title="Java developer"
              period="2012 - 2014"
              company="CDG systems"
              url="https://www.linkedin.com/company/cdg-systems-cdgs-/"
              imageSource="/CDGS.png"
              alt="cdgs-logo"
            />
            <ExperienceCard
              title="Intern"
              period="2010"
              company="Universiti Teknologi Malaysia"
              url="https://www.linkedin.com/school/universiti-teknologi-malaysia/"
              imageSource="/UTM.png"
              alt="utm-logo"
            />
          </ul>
        </div>
      </Slide>
      <Slide right>
        <div>
          <h2> Education </h2>
          <ul className={styles.experiencelist}>
            <ExperienceCard
              title="Computer Engineering"
              period="2008 - 2012"
              company="KMUTT"
              url="https://www.linkedin.com/school/kmutt/"
              imageSource="/kmutt.png"
              alt="kmutt-logo"
            />
            <ExperienceCard
              title="Student"
              period="2002 - 2008"
              company="MATHAYOMWATSING SCHOOL"
              url="https://www.mws.ac.th/"
              imageSource="/mws.jpg"
              alt="mws-logo"
            />
          </ul>
        </div>
      </Slide>
    </section>
  )
}
