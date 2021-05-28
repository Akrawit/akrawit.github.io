import styles from "../../styles/Contact.module.css"
import Slide from 'react-reveal/Slide';

export default function Contact() {
  return (
    <section className={styles.second}>
       <Slide left>
          <div>
            <h2 className={styles.title}>Akrawit Suwansantisuk</h2>
            <h2> Experience: </h2>
            <ul>
              <li className={styles.experience}><image></image> 2017- present: Software Engineer at Agoda services </li>
              <li className={styles.experience}> 2015 - 2017: Full Stack Developer at Wongnai. </li>
              <li className={styles.experience}> 2012 - 2014: Java developer at CDG systems.</li>
            </ul>
          </div>
      </Slide>
    </section>
  )
}
