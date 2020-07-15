import React from "react";
import styles from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div className={styles.container}>
            Hi! 👋 I am John Doe!
            <br />
            <br />
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                iure porro reiciendis commodi quo, sit eligendi magni ipsa
                debitis ab illo, voluptatum exercitationem perferendis adipisci
                consequatur repellat explicabo earum! Porro!
            </div>
            <br />
            <br />
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                veritatis dolores quidem perferendis officiis, tenetur id?
                Dolores quam numquam modi!
            </div>
            <br />
            <div className={styles.linkContainer}>
                <b>Get to know me!</b>
                <div className={styles.horizontal}>
                    <a href="">Github</a>
                    <a href="">LinkedIn</a>
                </div>
            </div>
            <br />
            <div className={styles.linkContainer}>
                <b>Documents</b>
                <div className={styles.horizontal}>
                    <a href="">Resume</a>
                    <a href="">Academic Transcript</a>
                </div>
            </div>
        </div>
    );
}
