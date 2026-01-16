import Head from "../../node_modules/next/head";
import dynamic from "../../node_modules/next/dynamic";
import styles from "../../styles/Header.module.css";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import SocialMedia from "./socialMedia";

const ParticlesBg = dynamic(
  () => {
    return import("particles-bg");
  },
  { ssr: false }
);

export default function Header() {
  const particleConfig = {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    opacity: 0.2,
  };
  return (
    <header id="head" className={styles.main} >
      <Head>
        <title>Akrawit Suwansantisuk - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv = "content-language" content = "en"/>
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
        gtag('config', 'G-9EP6P4GQ5S');`}}>
        </script>
      </Head>
      <main className={styles.main}>
        <section className={styles.firstSection}>
          <ParticlesBg type="cobweb" bg={particleConfig} />
          <h1 className={styles.title}>AKRAWIT</h1>
          <h1 className={styles.title}>SUWANSANTISUK</h1>
          <img src="/profile.jpg" alt="Akrawit Suwansantisuk - Profile" className={styles.profile} />
          <h2 className={styles.description}>Staff Software Engineer passionate about building innovative solutions. I balance my professional pursuits with marathon running and exploring new destinations around the world.</h2>
          <div className={styles.socialMedias}>
            <SocialMedia socialMedia="https://www.linkedin.com/in/akrawit/" iconType={faLinkedin} />
            <SocialMedia socialMedia="https://github.com/Akrawit" iconType={faGithub} />
          </div>
        </section>
      </main>
    </header>
  );
}
