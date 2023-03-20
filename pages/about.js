import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Chrono} from "react-chrono";

const events = [
    {
        title:"now",
        cardTitle: 'FATHER | FOUNDER | FREE LANCER',
        cardSubtitle:"I am currently working as a Data Engineer at a startup called Lanterns. ",
        cardDetailedText:"I am also working on a few personal projects."
    },
    {
        title: '2022 August',
        cardTitle: 'A NEW JOURNEY',
        cardSubtitle:"Embarked on a new journey in the world of entrepreneurship",
        cardDetailedText:"Start a new company called Lanterns. A company that builds products to help people to think crtically and rationally."
    },
    {
        title: '2022 January',
        cardTitle: 'THE CONVOCATION',
        cardSubtitle:"Harvard Business Analytics Program Graduation",
        cardDetailedText:"Graduated from the Harvard Business Analytics Program. Excited and confused too, wonder what the future holds."
    },
    {
        title: '2019 June',
        cardTitle: 'THE SECOND GRADUATION',
        cardSubtitle:"Master of Engineering in Intelligent System",
        cardDetailedText:"The second time I graduated from the University of Alberta. Finished with a Master of Engineering degree in Intelligent System and a mind full of uncertainty."
    },
    {
        title: '2018 November',
        cardTitle: 'THE BURN OUT',
        cardSubtitle:"After 8 years between four companies, I was emotionally and physically exhausted.",
        cardDetailedText:"Jump between companies and industries, I started to get emotionally affected. Even after the achievements I pulled off, I couldn't justify my methods. With no career expectation to hit and lost all tastes in achievements, I decided step back and get myself back."
    },
    {
        title: '2010 July',
        cardTitle: 'FIRST REAL JOB',
        cardSubtitle:"Not the first job, but the first engineering role",
        cardDetailedText:"I started my first engineering role as an electrical engineer in training at a small company called Enertia Engineering."
    },
    {
        title: '2009 June',
        cardTitle: 'GRADUATION!',
        cardSubtitle:"Graduated from University of Alberta",
        cardDetailedText:"I graduated from the University of Alberta with a Bachelor of Science degree in Electrical Engineering."
    },
    {
        title: '2004 August',
        cardTitle: 'A NEW BEGINING',
        cardSubtitle:"Arrived in Canada",
        cardDetailedText: "At the age of 18, I arrived in Canada along to start my undergrade study and potentially a new begining."
    },
    {
        title: '1986',
        cardTitle: 'BIRTHDAY',
        cardSubtitle:"Born in China",
        cardDetailedText:"This is the ground zero of my life."
    },
]

function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About</h1>
            <div style = {{width:"50%",minWidth:"800px"}}>
                <Chrono items={events} mode="VERTICAL_ALTERNATING"/>
            </div>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </div>
    );
}

export default About