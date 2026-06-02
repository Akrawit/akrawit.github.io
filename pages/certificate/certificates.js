import styles from "../../styles/Certificate.module.css";

const certificates = [
  { src: "/cer1.png", name: "CERTIFICATE #1", status: "COMPLETED" }
];

export default function Certificate() {
  return (
    <section id="certificates" className={styles.certificate}>
      <div className={styles.hofHeader}>★ HALL OF FAME ★</div>
      <div className={styles.hofStars}>★ ★ ★ ★ ★</div>
      <ul className={styles.ul}>
        {certificates.map((cert, i) => (
          <li key={i} className={styles.hofEntry}>
            <img src={cert.src} alt={cert.name} className={styles.hofCertImg} />
            <div>
              <div className={styles.hofCertName}>{cert.name}</div>
              <div className={styles.hofCertStatus}>STATUS: {cert.status}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
