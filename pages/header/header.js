// pages/header/header.js
import Head from "../../node_modules/next/head";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header id="head" className={styles.hero}>
      <Head>
        <title>Akrawit Suwansantisuk - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="description" content="This is my resume website built for practicing my skills." />
        <meta property="og:title" content="Akrawit Suwansantisuk - Resume" />
        <meta property="og:description" content="This is my resume website built for practicing my skills." />
        <meta property="og:url" content="https://akrawit.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9EP6P4GQ5S"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9EP6P4GQ5S');`
        }}></script>
      </Head>

      <div className={styles.topbar}>
        <span>TRAINER CARD</span>
        <span>ID NO. 00001</span>
      </div>

      <div className={styles.trainerCard}>
        <div className={styles.trainerPhotoWrap}>
          <img src="/profile.jpg" alt="Akrawit Suwansantisuk" className={styles.trainerPhoto} />
        </div>
        <div className={styles.trainerDetails}>
          <div className={styles.trainerName}>AKRAWIT</div>
          <div className={styles.trainerTitle}>STAFF SOFTWARE<br />ENGINEER</div>
          <div className={styles.typeBadges}>
            <span className={`${styles.typeBadge} ${styles.typeBackend}`}>BACKEND</span>
            <span className={`${styles.typeBadge} ${styles.typeFullstack}`}>FULLSTACK</span>
            <span className={`${styles.typeBadge} ${styles.typeRunner}`}>RUNNER</span>
          </div>
          <div className={styles.trainerId}>ID: AKRAWIT-S · LVL 99</div>
        </div>
      </div>

      <nav className={styles.navMenu}>
        <a href="#skills"       className={`${styles.navBtn} ${styles.navBtnActive}`}>▶ SKILLS</a>
        <a href="#experience"   className={`${styles.navBtn} ${styles.navBtnGreen}`}>WORK EXP</a>
        <a href="#certificates" className={styles.navBtn}>CERTS</a>
        <a href="#social"       className={styles.navBtn}>CONTACT</a>
      </nav>

      <div className={styles.dialogue}>
        Staff SWE passionate about building innovative solutions. Marathon runner. World explorer.
        <span className={styles.cursor}>▼</span>
      </div>

      <div id="social" className={styles.socialRow}>
        <a href="https://www.linkedin.com/in/akrawit/" className={styles.socialBtn} target="_blank" rel="noreferrer">▶ LINKEDIN</a>
        <a href="https://github.com/Akrawit"           className={styles.socialBtn} target="_blank" rel="noreferrer">▶ GITHUB</a>
      </div>
    </header>
  );
}
