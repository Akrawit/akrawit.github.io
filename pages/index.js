import styles from "../styles/Home.module.css"
import Header from "./header/header.js"
import Contact from "./contact/contact"


export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Contact/>
    </div>
  )
}
