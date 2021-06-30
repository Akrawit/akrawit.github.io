import styles from "../../styles/Experience.module.css"
import Slide from 'react-reveal/Slide';
import Image from 'next/image'
import ExperienceCard from "./ExperienceCard";


export default function Experience() {
  return (
    <section className={styles.second}>
      <Slide left>
        <div>
          <h3> Experience </h3>
          <ul className={styles.experiencelist}>
            <ExperienceCard
              title="Software Engineer"
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
    </section>
  )
}
