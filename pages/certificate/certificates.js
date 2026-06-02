import { useState } from "react";
import styles from "../../styles/Certificate.module.css";

const certificates = [
  {
    src: "/cer1.png",
    name: "HOW TO BECOME A BETTER PROGRAMMER",
    description: "Covers clean code principles, debugging strategies, and professional best practices for writing maintainable software.",
    status: "COMPLETED"
  }
];

export default function Certificate() {
  const [zoomed, setZoomed] = useState(null);

  return (
    <section id="certificates" className={styles.certificate}>
      <div className={styles.hofHeader}>★ HALL OF FAME ★</div>
      <div className={styles.hofStars}>★ ★ ★ ★ ★</div>
      <ul className={styles.ul}>
        {certificates.map((cert, i) => (
          <li key={i} className={styles.hofEntry}>
            <img
              src={cert.src}
              alt={cert.name}
              className={styles.hofCertImg}
              onClick={() => setZoomed(cert)}
            />
            <div>
              <div className={styles.hofCertName}>{cert.name}</div>
              <div className={styles.hofCertDesc}>{cert.description}</div>
              <div className={styles.hofCertStatus}>STATUS: {cert.status}</div>
            </div>
          </li>
        ))}
      </ul>

      {zoomed && (
        <div className={styles.lightboxOverlay} onClick={() => setZoomed(null)}>
          <img src={zoomed.src} alt={zoomed.name} className={styles.lightboxImg} />
        </div>
      )}
    </section>
  );
}
