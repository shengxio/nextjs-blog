import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Chronicle from '../components/chronicle.js';
// import {CustomBarChart,tendencyRadar,specificAspects} from './components/qualifications';
import {tendencyRadar, CustomBarChart} from '../components/qualifications.js';
// import {CustomBarChart} from './components/qualifications';

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
                {/* <div  className={styles.card}>
                    {CustomBarChart()}
                </div> */}
                <div  className={styles.card}>
                    {tendencyRadar()}
                </div>
            </div>

            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    );
}

export default About