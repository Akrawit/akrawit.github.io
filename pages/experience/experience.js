import styles from "../../styles/Experience.module.css"
import Slide from 'react-reveal/Slide';
import Image from 'next/image'

export default function Experience() {
  return (
    <section className={styles.second}>
      <Slide left>
        <div>
          <h3> Experience: </h3>
          <ul className={styles.experiencelist}>
            <li className={styles.experience}>
              <div className={styles.experienceinfo}>
                <span className={styles.title}>Software Engineer </span>
                <span>2017 - present</span>
                <span>Agoda Services</span>
              </div>
              <div>
                <a href='https://www.linkedin.com/company/agoda' target="_blank">
                  <Image src="/agoda.png" alt="agoda-logo" width="78px" height="78px" styles={styles.logo} />
                </a>
              </div>
            </li>
            <li className={styles.experience}>
              <div className={styles.experienceinfo}>
                <span className={styles.title}>Full Stack Developer</span>
                <span>2015 - 2017</span>
                <span>Wongnai</span>
              </div>
              <div>
                <a href='https://www.linkedin.com/company/wongnai.com/' target="_blank">
                  <Image src="/wongnai.png" alt="wongnai-logo" width="78px" height="78px" styles={styles.logo} />
                </a>
              </div>

            </li>
            <li className={styles.experience}>
              <div className={styles.experienceinfo}>
                <span className={styles.title}> Java developer</span>
                <span>2012 - 2014</span>
                <span>CDG systems</span>
              </div>
              <div>
                <a href='https://www.linkedin.com/company/cdg-systems-cdgs-/' target="_blank">
                  <Image src="/CDGS.png" alt="cdgs-logo" width="78px" height="78px" styles={styles.logo} />
                </a>
              </div>
            </li>
            <li className={styles.experience}>
              <div className={styles.experienceinfo}>
                <span className={styles.title}> Intern</span>
                <span>2010</span>
                <span>Universiti Teknologi Malaysia</span>
              </div>
              <div>
                <a href='https://www.linkedin.com/school/universiti-teknologi-malaysia/' target="_blank">
                  <Image src="/UTM.png" alt="utm-logo" width="78px" height="78px" styles={styles.logo} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </Slide>
    </section>
  )
}
