import styles from "../styles/Home.module.css"
import Header from "./header/header"
import Experience from "./experience/experience"
import Skill from "./skill/skill"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Experience/>
      <Skill />
    </div>
  )
}
