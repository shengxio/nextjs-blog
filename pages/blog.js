import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Posts from '../components/posts.js';

const title = "Blog"

function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.grid}>
                <div  className={styles.card}>
                    {/* <h3>About Here &rarr;</h3> */}
                    {Posts()}
                </div>
            </div>

            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    );
}

export default About