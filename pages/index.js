import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roland's coffee space</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to my space! 
        </h1>

        <p className={styles.description}>
          Hello friend, would you like to have a cup of coffee?
          <i class='fa fa-coffee'></i>
        </p>

        <div className={styles.grid}>
          <Link href="/about"  className={styles.card}>
            <h3>About &rarr;</h3>
            <p>
              Here is everything you need to know about me.
            </p>
          </Link>

          <Link href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Discover the projects that I am working on.</p>
          </Link>

          <Link href="/network" className={styles.card}>
            <h3>Network &rarr;</h3>
            <p>To hear about me from the people I have met in life.</p>
          </Link>

          <Link href="/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>
              Here is everything you need to know about me.
            </p>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Sheng-Xiong Ding @2023
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
