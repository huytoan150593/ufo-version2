import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>
                    Writer/Director/Actor Leon Le was born in Vietnam and grew
                    up there until the age of 13 when he moved with his family
                    to Southern California. After college he pursued his dream
                    of being on stage by moving to New York City to begin a
                    career in Musical Theater. After establishing himself as an
                    accomplished Actor/Dancer/Singer, including Broadway, film
                    and TV as well as acting roles in TV series and feature
                    films in Vietnam, he began pursuing another life long dream,
                    writing and directing.
                    <br />
                    <br /> His multiple award winning short film Dawn (2012)
                    that he wrote and directed won critical acclaim and screened
                    at over 30 film festivals worldwide garnering such awards as
                    Excellence in Fiction Short Filmmaking Award (AAIFF), Best
                    Short Film (VIFFl), Best LGBT Short Film (YXINEFF), Best
                    International Short Film (YXINEFF), Best Director (YXINEFF),
                    Best Editing (AOFF), Best Ensemble Cast (AOFF) and a
                    nomination for the Iris Prize Festival Award in Wales.
                    Proving his exceptional and visionary talent as a
                    Writer/Director, his short film Talking to My Mother (2014)
                    started it's festival run in 2015 and has already won awards
                    including Best Drama, Best Director, Best Actor and Best
                    Original Score at Asians on Film Festival, Best Short Film
                    at the Viet Film Fest, and Best LGBT Short and Audience
                    Choice Award at YXINEFF. <br />
                    <br />
                    His first feature film, Song Lang, filmed entirely in
                    Vietnam, made its debut there in 2018 earning significant
                    awards worldwide.
                </p>
            </div>
            <div className={styles.arrow}></div>
        </div>
    );
};

export default About;
