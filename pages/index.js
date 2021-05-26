import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic";
//import ParticlesBg from 'particles-bg'

const ParticlesBg = dynamic(
  () => {
    return import("particles-bg");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akrawit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ParticlesBg type="cobweb" bg={true} />
        <div className={styles.firstSection}>
          <h1 className={styles.title}>
            Welcome to my page
          </h1>
          <h2>
            I'm a developer, crypto investor, traveler.
          </h2>
        </div>
      </main>
    </div>
  )
}
