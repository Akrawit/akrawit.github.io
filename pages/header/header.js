import Head from "../../node_modules/next/head"
import dynamic from "../../node_modules/next/dynamic"
import styles from "../../styles/header/Header.module.css"

const ParticlesBg = dynamic(
  () => {
    return import("particles-bg")
  },
  { ssr: false }
)

export default function Header() {
  return (
    <header id="head" className={styles.main}>
      <Head>
        <title>Akrawit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.firstSection} >
          <ParticlesBg type="cobweb" bg={true} />
          <h1 className={styles.title}>Welcome to my page</h1>
          <h2>I'm a developer, runner, crypto investor, traveler.</h2>
        </section>
      </main>
    </header>
  );
}


