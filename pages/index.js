import styles from "../styles/Home.module.css"
import Header from "./header/header"
import Experience from "./experience/experience"
import Info from "./info/info"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Experience/>
    </div>
  )
}
