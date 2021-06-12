import styles from "../../styles/Experience.module.css"
import Slide from 'react-reveal/Slide';

export default function Experience() {
  return (
    <section className={styles.second}>
       <Slide left>
          <div>
            <h3> Experience: </h3>
            <ul>
              <li className={styles.experience}> 2017- present: Software Engineer at Agoda services </li>
              <li className={styles.experience}> 2015 - 2017: Full Stack Developer at Wongnai. </li>
              <li className={styles.experience}> 2012 - 2014: Java developer at CDG systems.</li>

            </ul>
            <h3> Education: </h3>
            <ul>
              <li className={styles.experience}> 2008 – 2012: King Mongkut’s University of Technology Thonburi, (KMUTT) Bachelor of Computer engineering </li>
            </ul>
          </div>
      </Slide>
    </section>
  )
}
