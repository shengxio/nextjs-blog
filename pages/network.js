import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Network() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Network</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    );
  }