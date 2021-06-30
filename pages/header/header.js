import Head from "../../node_modules/next/head"
import dynamic from "../../node_modules/next/dynamic"
import styles from "../../styles/Header.module.css"

const ParticlesBg = dynamic(
  () => {
    return import("particles-bg")
  },
  { ssr: false }
)

export default function Header() {
  let config = {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    opacity: 0.2,
  }
  return (
    <header id="head" className={styles.main} >
      <Head>
        <title>Akrawit Suwansantisuk - Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="This is my resume website. Build this for fun." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <section className={styles.firstSection} >
          <ParticlesBg type="cobweb" bg={true} bg={config} />
          <h1 className={styles.title}>AKRAWIT</h1>
          <img src="/profile.jpg" alt="profile-image" className={styles.profile} />
          <h2 className={styles.description}>I'm a developer, runner, traveler.</h2>
        </section>
      </main>
    </header>
  );
}


