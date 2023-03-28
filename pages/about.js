import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Chronicle from './components/chronicle.js';
import CustomBarChart from './components/skills.js';

// const skills = new Skills({});
const title = "About Me"

function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.grid}>
                <div  className={styles.card}>
                    {Chronicle()}
                </div>
                <div  className={styles.card}>
                    {/* {skills.render()} */}
                    {CustomBarChart()}
                </div>
            </div>

            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    );
}

export default About