import styles from "../../styles/Certificate.module.css"

export default function Certificate() {
  return (
    <section className={styles.certificate}>
      <h2>Certificates</h2>
      <ul>          
        <li>
          <h3>Completed</h3>
          <ul>
            <li className="cer">
              <img src="/cer1.png"/>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
