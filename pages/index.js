import styles from "../styles/Home.module.css"
import Header from "./header/header"
import Experience from "./experience/experience"
import Skill from "./skill/skill"
import Certificate from "./certificate/certificates"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Experience/>
      <Skill />
      <Certificate />
    </div>
  )
}
