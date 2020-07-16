import React from "react";
import styles from "./HomePage.module.css";

const BASE_PATH_TO_DOCUMENT = `${process.env.PUBLIC_URL}/documents/`;
const RESUME_FILENAME = "resume.pdf";
const RESUME_DOWNLOAD_NAME = "Resume-Zwe Lin(David)";
const TRANSCRIPT_FILENAME = "academic_transcript.pdf";
const TRANSCRIPT_DOWNLOAD_NAME = "Transcript-Zwe Lin(David)";

export default function HomePage() {
    return (
        <div className={styles.container}>
            Welcome to my page! 👋 I am Zwe Lin (David) Htet!
            <br />
            <br />
            <div>
                I am a fourth year Electrical and Computer Systems Engineering
                undergraduate from Monash University.
            </div>
            <br />
            <div>
                Undertaking an ECSE degree has been extremely rewarding in many
                ways. I am opportunate to learn the many aspects of ECSE
                throughout my uni life. From signal processing, control systems,
                and AC motors to robotics, machine learning and AI, I have
                learnt a great deal from my mentors, and my engineering
                teammates. This site serves as a compendium of the major
                projects that I have worked on throughout my 4 years.
            </div>
            <br />
            <div>
                Please feel free to contact me if you are interested in the work
                I have done.
            </div>
            <br />
            <div className={styles.linkContainer}>
                <b>Get to know me!</b>
                <div className={styles.horizontal}>
                    <a href="https://www.linkedin.com/in/zwehtet/">LinkedIn</a>
                </div>
            </div>
            <br />
            <div className={styles.linkContainer}>
                <b>Download Documents</b>
                <div className={styles.horizontal}>
                    <a
                        href={`${BASE_PATH_TO_DOCUMENT}${RESUME_FILENAME}`}
                        download={`${RESUME_DOWNLOAD_NAME}`}
                    >
                        Resume
                    </a>
                    <a
                        href={`${BASE_PATH_TO_DOCUMENT}${TRANSCRIPT_FILENAME}`}
                        download={`${TRANSCRIPT_DOWNLOAD_NAME}`}
                    >
                        Academic Transcript
                    </a>
                </div>
            </div>
        </div>
    );
}
